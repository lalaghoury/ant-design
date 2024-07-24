const express = require("express");
const router = express.Router();
const Building = require("../models/Building");
const Transaction = require("../models/Transaction");
const { io } = require("../index");
const { sendEmail } = require("../config/nodemailerConfig");
const { requireSignin } = require("../middlewares/authmiddleware");
const moment = require("moment");

router.get("/:id", async (req, res) => {
  try {
    const building = await Building.findById(req.params.id);
    if (!building) return res.status(404).json({ error: "Building not found" });
    res.json(building);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/:id/reserve", requireSignin, async (req, res) => {
  const {
    floorNumber,
    slotNumber,
    reservationStartTime,
    reservationEndTime,
    vehicleType,
  } = req.body;
  const { id: buildingId } = req.params;

  try {
    const building = await Building.findById(buildingId);
    if (!building) return res.status(404).json({ error: "Building not found" });

    const floor = building.floors.find((f) => f.number === floorNumber);
    if (!floor) return res.status(404).json({ error: "Floor not found" });

    const slot = floor.slots.find((s) => s.number === slotNumber);
    if (!slot) return res.status(404).json({ error: "Slot not found" });

    let existingReservation = null;

    for (const r of slot.reservations) {
      const reservationStartTime = moment(r.reservationStartTime).format(
        "YYYY-MM-DD HH:mm"
      );
      const reservationEndTime = moment(r.reservationEndTime).format(
        "YYYY-MM-DD HH:mm"
      );

      const checkStartTime =
        moment(reservationStartTime).format("YYYY-MM-DD HH:mm");
      const checkEndTime =
        moment(reservationEndTime).format("YYYY-MM-DD HH:mm");

      if (
        (moment(reservationStartTime).isSameOrBefore(checkStartTime) &&
          moment(reservationEndTime).isSameOrAfter(checkEndTime)) ||
        (moment(reservationStartTime).isSameOrAfter(checkStartTime) &&
          moment(reservationStartTime).isSameOrBefore(checkEndTime)) ||
        (moment(reservationEndTime).isSameOrAfter(checkStartTime) &&
          moment(reservationEndTime).isSameOrBefore(checkEndTime))
      ) {
        existingReservation = r;
        break;
      }
    }

    if (existingReservation) {
      return res.status(400).json({
        error: `Slot already reserved between ${existingReservation.reservationStartTime} and ${existingReservation.reservationEndTime}`,
      });
    }

    const reservationObj = {
      reservedBy: req.user._id,
      reservationStartTime: new Date(reservationStartTime),
      reservationEndTime: new Date(reservationEndTime),
      vehicleType,
    };

    slot.reservations.push(reservationObj);
    await building.save();

    io.emit("emailNotification", {
      type: "reserveSlot",
      floorNumber,
      slotNumber,
    });

    await sendEmail(
      req.user.email,
      `${req.user.name}, Reservation Confirmation from Carpark`,
      `Dear ${req.user.name},\n\nThank you for reserving a slot for your ${vehicleType} at Carpark. Your reservation for Floor ${floorNumber}, Slot ${slotNumber} has been confirmed. The reservation time is ${reservationStartTime} to ${reservationEndTime}.\n\nBest regards,\nCarpark Team`
    );

    res.json({ message: "Slot reserved successfully" });
  } catch (error) {
    console.error("Error during reservation:", error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/:id/cancel", requireSignin, async (req, res) => {
  const {
    floorNumber,
    slotNumber,
    reservationTime,
    reservationIndex,
    vehicleType,
  } = req.body;

  try {
    const building = await Building.findById(req.params.id);
    if (!building) return res.status(404).json({ error: "Building not found" });

    const floor = building.floors.find((f) => f.number === floorNumber);
    if (!floor) return res.status(404).json({ error: "Floor not found" });

    const slot = floor.slots.find((s) => s.number === slotNumber);
    if (!slot) return res.status(404).json({ error: "Slot not found" });

    slot.reservations = slot.reservations.filter(
      (_, index) => index !== reservationIndex
    );

    await building.save();

    io.emit("emailNotification", {
      type: "cancelReservation",
      floorNumber,
      slotNumber,
    });
    await sendEmail(
      req.user.email,

      `${req.user.name}, Reservation Cancellation Confirmation from Carpark`,
      `Dear ${req.user.name},\n\nYour reservation for Floor ${floorNumber}, Slot ${slotNumber} on ${reservationTime} for ${vehicleType}   at Carpark has been successfully cancelled.\n\nBest regards,\nCarpark Team`
    );

    res.json(building);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/:id/buy", requireSignin, async (req, res) => {
  const { providerName, phoneNumber, price } = req.body;

  try {
    const building = await Building.findById(req.params.id);
    if (!building)
      return res.status(404).json({ message: "Building not found" });
    if (building.isBought)
      return res.status(400).json({ message: "Building already bought" });

    building.isBought = true;
    building.status = "reserved";
    building.providerName = providerName;
    building.phoneNumber = phoneNumber;
    await building.save();

    const transaction = new Transaction({
      providerName,
      phoneNumber,
      buildingId: building._id,
      price,
    });
    await transaction.save();

    io.emit("emailNotification", { type: "buyBuilding" });

    await sendEmail(
      req.user.email,
      `Purchase Confirmation from Carpark`,
      `Dear ${req.user.name},\n\nCongratulations! You have successfully purchased the building ${building.name}. Your phone number is ${phoneNumber}. The purchase price was ${price}.\n\nBest regards,\nCarpark Team`
    );

    res.json({ message: "Building purchased successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/:id/buyFloor", requireSignin, async (req, res) => {
  const { floorNumber, price } = req.body;

  try {
    const building = await Building.findById(req.params.id);
    if (!building)
      return res.status(404).json({ message: "Building not found" });

    const floor = building.floors.find((f) => f.number === floorNumber);
    if (!floor) return res.status(404).json({ message: "Floor not found" });

    if (floor.isBought)
      return res.status(400).json({ message: "Floor already bought" });

    floor.isBought = true;
    await building.save();

    io.emit("emailNotification", { type: "buyFloor" });

    await sendEmail(
      req.user.email,
      `Floor Purchase Confirmation from Carpark`,
      `Dear ${req.user.name},\n\nCongratulations! You have successfully purchased Floor ${floorNumber}. The purchase price was ${price}.\n\nBest regards,\nCarpark Team`
    );

    res.json({ message: "Floor purchased successfully" });
  } catch (error) {
    res.status500.json({ message: error.message });
  }
});

router.post("/:id/leave", requireSignin, async (req, res) => {
  const { leaveReason } = req.body;

  try {
    const building = await Building.findById(req.params.id);
    if (!building) return res.status(404).json({ error: "Building not found" });

    if (!building.isBought)
      return res.status(400).json({ error: "Building not bought" });
    // building.price= 400;
    building.status = "available";
    building.isBought = false;
    building.providerName = null;
    building.phoneNumber = null;
    await building.save();

    io.emit("emailNotification", { type: "leaveBuilding", leaveReason });

    await sendEmail(
      req.user.email,
      `Building Leave Confirmation from Carpark`,
      `Dear ${req.user.name},\n\nYou have successfully left the building ${building.name}. Reason: ${leaveReason}.\n\nBest regards,\nCarpark Team`
    );

    res.json(building);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
