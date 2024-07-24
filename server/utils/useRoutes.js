const useRoutes = (app) => {
    // Welcome Route
    app.get("/", (req, res) => {
        res.send("welcome");
    });

    // User Routes
    const userRouter = require("../routes/user");
    app.use("/api/users", userRouter);

    // Auth Routes
    const authRouter = require("../routes/auth");
    app.use("/api/auth", authRouter);


   

};

module.exports = useRoutes;