!(function(){"use strict";var Xe=Object.defineProperty,Qe=Object.defineProperties;var Ze=Object.getOwnPropertyDescriptors;var ae=Object.getOwnPropertySymbols;var et=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable;var J=(p,h,u)=>h in p?Xe(p,h,{enumerable:!0,configurable:!0,writable:!0,value:u}):p[h]=u,Y=(p,h)=>{for(var u in h||(h={}))et.call(h,u)&&J(p,u,h[u]);if(ae)for(var u of ae(h))tt.call(h,u)&&J(p,u,h[u]);return p},oe=(p,h)=>Qe(p,Ze(h));var w=(p,h,u)=>(J(p,typeof h!="symbol"?h+"":h,u),u),K=(p,h,u)=>{if(!h.has(p))throw TypeError("Cannot "+u)};var W=(p,h,u)=>(K(p,h,"read from private field"),u?u.call(p):h.get(p)),X=(p,h,u)=>{if(h.has(p))throw TypeError("Cannot add the same private member more than once");h instanceof WeakSet?h.add(p):h.set(p,u)},ce=(p,h,u,f)=>(K(p,h,"write to private field"),f?f.call(p,u):h.set(p,u),u);var $=(p,h,u)=>(K(p,h,"access private method"),u);var E=(p,h,u)=>new Promise((f,B)=>{var T=O=>{try{A(u.next(O))}catch(R){B(R)}},z=O=>{try{A(u.throw(O))}catch(R){B(R)}},A=O=>O.done?f(O.value):Promise.resolve(O.value).then(T,z);A((u=u.apply(p,h)).next())});(self.webpackChunkantd=self.webpackChunkantd||[]).push([[94965],{994965:function(p,h,u){u.r(h),u.d(h,{SandpackNode:function(){return Ke}});var f=u(151869),B=Object.create,T=Object.defineProperty,z=Object.getOwnPropertyDescriptor,A=Object.getOwnPropertyNames,O=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,de=(e,r,t)=>r in e?T(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,j=(e,r)=>function(){return r||(0,e[A(e)[0]])((r={exports:{}}).exports,r),r.exports},le=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of A(r))!R.call(e,s)&&s!==t&&T(e,s,{get:()=>r[s],enumerable:!(n=z(r,s))||n.enumerable});return e},x=(e,r,t)=>(t=e!=null?B(O(e)):{},le(r||!e||!e.__esModule?T(t,"default",{value:e,enumerable:!0}):t,e)),ue=(e,r,t)=>(de(e,typeof r!="symbol"?r+"":r,t),t),G=(e,r,t)=>{if(!r.has(e))throw TypeError("Cannot "+t)},S=(e,r,t)=>(G(e,r,"read from private field"),t?t.call(e):r.get(e)),F=(e,r,t)=>{if(r.has(e))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(e):r.set(e,t)},U=(e,r,t,n)=>(G(e,r,"write to private field"),n?n.call(e,t):r.set(e,t),t),k=(e,r,t)=>(G(e,r,"access private method"),t),Q=j({"../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/pad.js"(e,r){r.exports=function(n,s){var i="000000000"+n;return i.substr(i.length-s)}}}),he=j({"../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/fingerprint.browser.js"(e,r){var t=Q(),n=typeof window=="object"?window:self,s=Object.keys(n).length,i=navigator.mimeTypes?navigator.mimeTypes.length:0,a=t((i+navigator.userAgent.length).toString(36)+s.toString(36),4);r.exports=function(){return a}}}),fe=j({"../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/getRandomValue.browser.js"(e,r){var t,n=typeof window!="undefined"&&(window.crypto||window.msCrypto)||typeof self!="undefined"&&self.crypto;n?(s=Math.pow(2,32)-1,t=function(){return Math.abs(n.getRandomValues(new Uint32Array(1))[0]/s)}):t=Math.random;var s;r.exports=t}}),Z=j({"../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/index.js"(e,r){var t=he(),n=Q(),s=fe(),i=0,a=4,o=36,c=Math.pow(o,a);function l(){return n((s()*c<<0).toString(o),a)}function v(){return i=i<c?i:0,i++,i-1}function g(){var _="c",P=new Date().getTime().toString(o),C=n(v().toString(o),a),d=t(),m=l()+l();return _+P+C+d+m}g.slug=function(){var P=new Date().getTime().toString(36),C=v().toString(36).slice(-4),d=t().slice(0,1)+t().slice(-1),m=l().slice(-2);return P.slice(-2)+C+d+m},g.isCuid=function(P){return typeof P!="string"?!1:!!P.startsWith("c")},g.isSlug=function(P){if(typeof P!="string")return!1;var C=P.length;return C>=7&&C<=10},g.fingerprint=t,r.exports=g}}),ee=j({"../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/createDeferredExecutor.js"(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createDeferredExecutor=void 0;function r(){const t=(n,s)=>{t.state="pending",t.resolve=i=>{if(t.state!=="pending")return;t.result=i;const a=o=>(t.state="fulfilled",o);return n(i instanceof Promise?i:Promise.resolve(i).then(a))},t.reject=i=>{if(t.state==="pending")return queueMicrotask(()=>{t.state="rejected"}),s(t.rejectionReason=i)}};return t}e.createDeferredExecutor=r}}),pe=j({"../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/DeferredPromise.js"(e){var n,s,V,a;"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DeferredPromise=void 0;var r=ee(),t=(a=class extends Promise{constructor(c=null){const l=(0,r.createDeferredExecutor)();super((v,g)=>{l(v,g),c==null||c(l.resolve,l.reject)});X(this,s);X(this,n,void 0);w(this,"resolve");w(this,"reject");ce(this,n,l),this.resolve=W(this,n).resolve,this.reject=W(this,n).reject}get state(){return W(this,n).state}get rejectionReason(){return W(this,n).rejectionReason}then(c,l){return $(this,s,V).call(this,super.then(c,l))}catch(c){return $(this,s,V).call(this,super.catch(c))}finally(c){return $(this,s,V).call(this,super.finally(c))}},n=new WeakMap,s=new WeakSet,V=function(c){return Object.defineProperties(c,{resolve:{configurable:!0,value:this.resolve},reject:{configurable:!0,value:this.reject}})},a);e.DeferredPromise=t}}),q=j({"../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/index.js"(e){"use strict";var r=e&&e.__createBinding||(Object.create?function(n,s,i,a){a===void 0&&(a=i);var o=Object.getOwnPropertyDescriptor(s,i);(!o||("get"in o?!s.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return s[i]}}),Object.defineProperty(n,a,o)}:function(n,s,i,a){a===void 0&&(a=i),n[a]=s[i]}),t=e&&e.__exportStar||function(n,s){for(var i in n)i!=="default"&&!Object.prototype.hasOwnProperty.call(s,i)&&r(s,n,i)};Object.defineProperty(e,"__esModule",{value:!0}),t(ee(),e),t(pe(),e)}}),te=j({"../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/MemoryLeakError.js"(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MemoryLeakError=void 0;var r=class extends Error{constructor(n,s,i){super(`Possible EventEmitter memory leak detected. ${i} ${s.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`);w(this,"emitter");w(this,"type");w(this,"count");this.emitter=n,this.type=s,this.count=i,this.name="MaxListenersExceededWarning"}};e.MemoryLeakError=r}}),me=j({"../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/Emitter.js"(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Emitter=void 0;var r=te(),t,n,s,i,a,o,c,l,v,g,_,P=class{constructor(){F(this,i),F(this,o),F(this,l),F(this,g),F(this,t,void 0),F(this,n,void 0),F(this,s,void 0),U(this,t,new Map),U(this,n,P.defaultMaxListeners),U(this,s,!1)}static listenerCount(d,m){return d.listenerCount(m)}setMaxListeners(d){return U(this,n,d),this}getMaxListeners(){return S(this,n)}eventNames(){return Array.from(S(this,t).keys())}emit(d,...m){const y=k(this,i,a).call(this,d);return y.forEach(D=>{D.apply(this,m)}),y.length>0}addListener(d,m){k(this,g,_).call(this,"newListener",d,m);const y=k(this,i,a).call(this,d).concat(m);if(S(this,t).set(d,y),S(this,n)>0&&this.listenerCount(d)>S(this,n)&&!S(this,s)){U(this,s,!0);const D=new r.MemoryLeakError(this,d,this.listenerCount(d));console.warn(D)}return this}on(d,m){return this.addListener(d,m)}once(d,m){return this.addListener(d,k(this,l,v).call(this,d,m))}prependListener(d,m){const y=k(this,i,a).call(this,d);if(y.length>0){const D=[m].concat(y);S(this,t).set(d,D)}else S(this,t).set(d,y.concat(m));return this}prependOnceListener(d,m){return this.prependListener(d,k(this,l,v).call(this,d,m))}removeListener(d,m){const y=k(this,i,a).call(this,d);return y.length>0&&(k(this,o,c).call(this,y,m),S(this,t).set(d,y),k(this,g,_).call(this,"removeListener",d,m)),this}off(d,m){return this.removeListener(d,m)}removeAllListeners(d){return d?S(this,t).delete(d):S(this,t).clear(),this}listeners(d){return Array.from(k(this,i,a).call(this,d))}listenerCount(d){return k(this,i,a).call(this,d).length}rawListeners(d){return this.listeners(d)}},C=P;t=new WeakMap,n=new WeakMap,s=new WeakMap,i=new WeakSet,a=function(d){return S(this,t).get(d)||[]},o=new WeakSet,c=function(d,m){const y=d.indexOf(m);return y>-1&&d.splice(y,1),[]},l=new WeakSet,v=function(d,m){const y=(...D)=>{this.removeListener(d,y),m.apply(this,D)};return y},g=new WeakSet,_=function(d,m,y){this.emit(d,m,y)},ue(C,"defaultMaxListeners",10),e.Emitter=C}}),ve=j({"../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/index.js"(e){"use strict";var r=e&&e.__createBinding||(Object.create?function(n,s,i,a){a===void 0&&(a=i);var o=Object.getOwnPropertyDescriptor(s,i);(!o||("get"in o?!s.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return s[i]}}),Object.defineProperty(n,a,o)}:function(n,s,i,a){a===void 0&&(a=i),n[a]=s[i]}),t=e&&e.__exportStar||function(n,s){for(var i in n)i!=="default"&&!Object.prototype.hasOwnProperty.call(s,i)&&r(s,n,i)};Object.defineProperty(e,"__esModule",{value:!0}),t(me(),e),t(te(),e)}}),we=x(Z()),ge=/(%?)(%([sdjo]))/g;function ye(e,r){switch(r){case"s":return e;case"d":case"i":return Number(e);case"j":return JSON.stringify(e);case"o":{if(typeof e=="string")return e;const t=JSON.stringify(e);return t==="{}"||t==="[]"||/^\[object .+?\]$/.test(t)?e:t}}}function b(e,...r){if(r.length===0)return e;let t=0,n=e.replace(ge,(s,i,a,o)=>{const c=r[t],l=ye(c,o);return i?s:(t++,l)});return t<r.length&&(n+=` ${r.slice(t).join(" ")}`),n=n.replace(/%{2,2}/g,"%"),n}var _e=2;function Ee(e){if(!e.stack)return;const r=e.stack.split(`
`);r.splice(1,_e),e.stack=r.join(`
`)}var Pe=class extends Error{constructor(e,...r){super(e),this.message=e,this.name="Invariant Violation",this.message=b(e,...r),Ee(this)}},M=(e,r,...t)=>{if(!e)throw new Pe(r,...t)};M.as=(e,r,t,...n)=>{if(!r)throw e.prototype.name!=null?new e(b(t,n)):e(b(t,n))};var N=x(q()),be=window.localStorage.CSB_EMULATOR_DEBUG,Le="\x1B[0m",Se="\x1B[32;1m",Me="\x1B[31m",Ie="\x1B[34m",ke="\x1B[33;1m",je="\x1B[35;1m",re="\x1B[36;1m",Oe={preview:ke,emulator:je,runtime:re,bridge:Ie,"runtime:worker":re};function ne(e){return function(t,...n){if(be==="true"){const s=()=>t.includes("sender")?`${Se}sender`:t.includes("receiver")?`${Me}receiver`:"",i=t.replace(/\[.+\]:/,"");console.debug(`${Oe[e]}${e}:${s()}${Le}:${i}`,...n)}}}var I=ne("emulator"),rt=class{constructor(){w(this,"emitter");w(this,"senderPort",null);this.emitter=new EventTarget,this.waitForHandshake()}waitForHandshake(){const e=new N.DeferredPromise,r=t=>{const{data:n}=t;I("[message-receiver]: incoming",t),n.type==="internal/handshake"&&(M(t.ports.length>0,"Failed to confirm a MessageReceiver handshake: received event has no ports"),this.senderPort=t.ports[0],this.addMessageListener(),I("[message-receiver]: handshake received!",this.senderPort),this.send("internal/handshake/done"),I("[message-receiver]: finish handshake"))};return window.addEventListener("message",r),e.then(()=>{window.removeEventListener("message",r)}),window.parent.postMessage({type:"internal/ready"},"*"),e}addMessageListener(){M(this.senderPort,"[MessageReceiver] Failed to add a message listener: sender port is not defined. Did you forget to await a handshake?"),this.senderPort.onmessage=e=>{const r=e.data;r.type!=null&&this.emitter.dispatchEvent(new MessageEvent(r.type,{data:r.payload}))}}on(e,r,t){this.emitter.addEventListener(e,n=>E(this,null,function*(){if(!(n instanceof MessageEvent))return;const{operationId:s,payload:i}=n.data;try{const a=yield r(i);this.send("internal/operation/done",{operationId:s,listenerPayload:a})}catch(a){a instanceof Error&&this.send("internal/operation/failed",{operationId:s,error:a})}}),t)}send(e,...r){M(this.senderPort,'[MessageReceiver] Failed to send a message "%j": sender port is not defined. Did you forget to await a handshake?',e);const t=r[0]||{};I('[message-receiver]: send "%s"',e,t),this.senderPort.postMessage({type:e,payload:t})}},Ce=class{constructor(e){w(this,"emitter");w(this,"channel");w(this,"receiverPort");w(this,"receiverReadyPromise");this.target=e,this.emitter=new EventTarget,this.channel=new MessageChannel,this.receiverPort=this.channel.port1;const r=new N.DeferredPromise,t=n=>{n.data.type==="internal/ready"&&(I("[message-sender]: runtime is ready"),r.resolve())};window.addEventListener("message",t),r.then(()=>{window.removeEventListener("message",t)}),this.receiverReadyPromise=r,this.receiverPort.onmessage=n=>{const s=n.data;s.type!=null&&(I('[message-sender]: emitting "%s" event...',s.type,s.payload),this.emitter.dispatchEvent(new MessageEvent(s.type,{data:s.payload})))}}handshake(){return E(this,null,function*(){const e=new N.DeferredPromise;yield this.receiverReadyPromise,I("[message-sender]: sending handshake"),this.target.postMessage({type:"internal/handshake"},"*",[this.channel.port2]),this.on("internal/handshake/done",()=>{e.resolve(),clearTimeout(r)});const r=setTimeout(()=>{e.reject(new Error("MessageSender: Handshake timeout"))},5e3);return e})}on(e,r,t){I('[message-sender]: add listener "%s"',e),this.emitter.addEventListener(e,n=>{n instanceof MessageEvent&&r(n)},t)}off(e,r,t){this.emitter.removeEventListener(e,r,t)}send(e,...r){return E(this,null,function*(){const t=new N.DeferredPromise,n=(0,we.default)(),s=r[0]||{};I('[message-sender]: send "%s" (%s)',e,n,s),this.receiverPort.postMessage({type:e,payload:{operationId:n,payload:s}}),I('[message-sender]: adding done listener for "%s" (%s)',e,n);const i=o=>{const{data:c}=o;if(c.operationId===n){const l=c.listenerPayload||{};I('[message-sender]: resolving "%s (%s) promise!',e,n),t.resolve(oe(Y({},l),{operationId:c.operationId}))}},a=o=>{const{data:c}=o;c.operationId===n&&(I('[message-sender]: rejecting "%s (%s) promise!',e,n),t.reject(c.error))};return this.on("internal/operation/done",i),this.on("internal/operation/failed",a),t.finally(()=>{this.emitter.removeEventListener("internal/operation/done",i),this.emitter.removeEventListener("internal/operation/failed",a)})})}},ie=x(q()),Fe=x(Z()),De=class{constructor(e){this.channel=e}init(e){return E(this,null,function*(){yield this.channel.send("fs/init",{files:e})})}readFile(e,r){return E(this,null,function*(){const t=yield this.channel.send("fs/readFile",{path:e,encoding:r}).catch(n=>{throw new Error(b('Failed to read file at path "%s"',e),{cause:n})});if(!t)throw new Error("File not found");return t.data})}writeFile(e,r,t){return E(this,null,function*(){let n,s=!1;typeof t=="object"?(n=t.encoding,s=!!t.recursive):typeof t=="string"&&(n=t),yield this.channel.send("fs/writeFile",{path:e,content:r,encoding:n,recursive:s}).catch(i=>{throw new Error(b('Failed to write file at path "%s"',e),{cause:i})})})}readdir(e){return E(this,null,function*(){const r=yield this.channel.send("fs/readdir",{path:e}).catch(t=>{throw new Error(b('Failed to read directory at path "%s"',e),{cause:t})});if(!r)throw new Error("Directory not found");return r.data})}mkdir(e,r){return E(this,null,function*(){const t=!!(r!=null&&r.recursive);yield this.channel.send("fs/mkdir",{path:e,recursive:t}).catch(n=>{throw new Error(b('Failed to make directory at path "%s"',e),{cause:n})})})}stat(e){return E(this,null,function*(){const r=yield this.channel.send("fs/stat",{path:e}).catch(t=>{throw new Error(b('Failed to stat file at path "%s"',e),{cause:t})});if(!r)throw new Error("File not found");return r.data})}rm(e,r){return E(this,null,function*(){const{force:t,recursive:n}=r||{};yield this.channel.send("fs/rm",{path:e,force:t,recursive:n}).catch(s=>{throw new Error(b('Failed to remove file at path "%s"',e),{cause:s})})})}watch(e,r,t){return E(this,null,function*(){const n=(0,Fe.default)();return yield this.channel.send("fs/watch",{watcherId:n,includes:e,excludes:r}),this.channel.on("fs/watch-event",({data:s})=>{if(s.watcherId===n&&t){const i=Y({},s);delete i.watcherId,t(i)}}),{dispose:()=>this.channel.send("fs/unwatch",{watcherId:n})}})}},se=x(ve()),Ae=class{constructor(e){this.channel=e}create(){return new xe(this.channel)}},xe=class{constructor(e){w(this,"id");w(this,"state");w(this,"stdout");w(this,"stderr");w(this,"stdin");this.channel=e,this.state="running",this.stdout=new se.Emitter,this.stderr=new se.Emitter,this.stdin={write:r=>{if(!this.id)throw new Error("Failed to write to stdin, no process is currently running");return this.channel.send("shell/stdin",{data:r,workerId:this.id})}},this.forwardStdEvents()}forwardStdEvents(){this.channel.on("worker/tty",e=>{const{data:r}=e;if(r.workerId===this.id)switch(r.payload.type){case"out":{this.stdout.emit("data",r.payload.data);break}case"err":{this.stderr.emit("data",r.payload.data);break}}})}runCommand(n,s){return E(this,arguments,function*(e,r,t={}){M(!this.id,'Failed to run "runCommand" on a ShellProcess: there is already a process running.');const i=yield this.channel.send("shell/runCommand",{command:e,args:r,options:t});return M(i,'Failed to run "runCommand" on a ShellProcess: was not able to retrieve a running process.'),this.id=i.id,this.state="running",i})}on(e,r){return E(this,null,function*(){switch(e){case"progress":{this.channel.on("worker/progress",({data:t})=>{r(t.status)});return}case"exit":{this.channel.on("worker/exit",({data:t})=>{t.workerId===this.id&&r(t.exitCode,t.error)});return}}})}kill(){return E(this,null,function*(){M(this.id,'Failed to run "kill" on a ShellProcess: there is no process running. Did you forget to run it?'),this.state="idle",yield this.channel.send("shell/exit",{id:this.id}).catch(e=>{throw new Error(b('Failed to kill shell with ID "%s"',this.id),{cause:e})}),this.id=void 0})}},Te=x(q()),Re=2e4,Ue=class{constructor(e){this.channel=e}waitFor(n,s){return E(this,arguments,function*(e,r,t=Re){const i=new Te.DeferredPromise,a=setTimeout(()=>{i.reject()},t),o=yield this.channel.send("preview/get/info",e).catch(l=>{i.reject(new Error(b('Failed to look up preview information for shell ID "%s" (port: %d)',e.sourceShellId,e.port)))}),c=o&&r(o);return c&&i.resolve({url:o.url,port:o.port,sourceShellId:o.sourceShellId}),this.channel.on("preview/port/ready",({data:l})=>{!c&&r(l)&&i.resolve({url:l.url,port:l.port,sourceShellId:l.sourceShellId})}),i.finally(()=>{clearTimeout(a)})})}getByShellId(e,r){return E(this,null,function*(){return this.waitFor({sourceShellId:e},t=>t.sourceShellId===e,r).catch(t=>{throw new Error(b('Failed to get shell by ID "%s"',e),{cause:t})})})}waitForPort(e,r){return E(this,null,function*(){return this.waitFor({port:e},t=>t.port===e,r).catch(t=>{throw new Error(b("Failed to await port %d",e),{cause:t})})})}},We="https://nodebox-runtime.codesandbox.io",H=ne("emulator"),Be=class{constructor(e){w(this,"channel",null);w(this,"isConnected");w(this,"url");w(this,"fileSystemApi",null);w(this,"shellApi",null);w(this,"previewApi",null);this.options=e,M(this.options.iframe,'Failed to create a Nodebox: expected "iframe" argument to be a reference to an <iframe> element but got %j',this.options.iframe),this.url=this.options.runtimeUrl||We,this.isConnected=!1}connect(){return E(this,null,function*(){const{iframe:e,cdnUrl:r}=this.options;H("[message-sender]: Connecting to node emulator...");const t=new ie.DeferredPromise;this.url||t.reject(new Error("Nodebox URL is missing. Did you forget to provide it when creating this Nodebox instance?")),M(e.contentWindow,"Failed to create a MessageChannel with the Nodebox iframe: no content window found"),this.channel=new Ce(e.contentWindow);const n=new ie.DeferredPromise;return e.setAttribute("src",this.url),e.addEventListener("load",()=>{n.resolve()},{once:!0}),e.addEventListener("error",s=>{n.reject(s.error)},{once:!0}),yield n,H("[message-sender]: IFrame loaded..."),yield this.channel.handshake(),H("[message-sender]: Handshake completed..."),this.channel.send("connect",{cdnUrl:r}),this.channel.on("runtime/ready",()=>{t.resolve()}),t.then(()=>{H("[message-sender]: Connected to runtime..."),this.isConnected=!0})})}get fs(){return M(this.isConnected,'Failed to access the File System API: consumer is not connected. Did you forget to run "connect()"?'),this.fileSystemApi?this.fileSystemApi:(this.fileSystemApi=new De(this.channel),this.fileSystemApi)}get shell(){return M(this.isConnected,'Failed to access the Shell API: consumer is not connected. Did you forget to run "connect()"?'),this.shellApi?this.shellApi:(this.shellApi=new Ae(this.channel),this.shellApi)}get preview(){return M(this.isConnected,'Failed to access the Preview API: consumer is not connected. Did you forget to run "connect()"?'),this.previewApi?this.previewApi:(this.previewApi=new Ue(this.channel),this.previewApi)}},Ne="INJECT_AND_INVOKE",He="PREVIEW_LOADED",$e=u(232308),L=u(963441),nt=u(395002),it=u(338471);function Ve(e,r){return(0,f._)(this,void 0,void 0,function(){var t,n,s,i,a;return(0,f.a)(this,function(o){return t=e.contentWindow,(0,f.n)(t,"Failed to await preview iframe: no content window found"),n=9e4,s=20,i=0,[2,new Promise(function(c,l){var v=function(){var g=function(){clearTimeout(a),i=s,c(),e.removeEventListener("load",g)};if(i>=s){l((0,f.c)("Could not able to connect to preview."));return}e.setAttribute("src",r),a=setTimeout(function(){v(),e.removeEventListener("load",g)},n),i=i+1,e.addEventListener("load",g)};e.addEventListener("error",function(){return l(new Error("Iframe error"))}),e.addEventListener("abort",function(){return l(new Error("Aborted"))}),v()})]})})}var ze=function(e,r){e.style.border="0",e.style.width=r.width||"100%",e.style.height=r.height||"100%",e.style.overflow="hidden",e.allow="cross-origin-isolated"};function Ge(e){var r=e.scope,t=window.history.__proto__,n=[],s=0,i=function(c){parent.postMessage({type:"urlchange",url:c,back:s>0,forward:s<n.length-1,channelId:r.channelId},"*")};function a(c,l){n.splice(s+1),n.push({url:c,state:l}),s=n.length-1}Object.assign(window.history,{go:function(c){var l=s+c;if(l>=0&&l<=n.length-1){s=l;var v=n[s],g=v.url,_=v.state;t.replaceState.call(window.history,_,"",g);var P=document.location.href;i(P),window.dispatchEvent(new PopStateEvent("popstate",{state:_}))}},back:function(){window.history.go(-1)},forward:function(){window.history.go(1)},pushState:function(c,l,v){t.replaceState.call(window.history,c,l,v),a(v,c),i(document.location.href)},replaceState:function(c,l,v){t.replaceState.call(window.history,c,l,v),n[s]={state:c,url:v},i(document.location.href)}});function o(c){var l=c.data;l.type==="urlback"?history.back():l.type==="urlforward"?history.forward():l.type==="refresh"&&document.location.reload()}window.addEventListener("message",o)}function qe(e){var r=e.scope,t=0;function n(){if(typeof window=="undefined")return 0;var o=document.body,c=document.documentElement;return Math.max(o.scrollHeight,o.offsetHeight,c.offsetHeight)}function s(){var o=n();t!==o&&window.parent.postMessage({type:"resize",height:o,codesandbox:!0,channelId:r.channelId},"*"),t=o}s();var i,a=new MutationObserver(function(){i===void 0&&(s(),i=setTimeout(function(){i=void 0},300))});a.observe(document,{attributes:!0,childList:!0,subtree:!0}),setInterval(s,300)}var Je=[{code:Ge.toString(),id:"historyListener"},{code:"function consoleHook({ scope }) {"+L.c+`
};`,id:"consoleHook"},{code:qe.toString(),id:"watchResize"}],Ye=function(e,r){Je.forEach(function(t){var n,s=t.code,i=t.id,a={uid:i,type:Ne,code:"exports.activate = ".concat(s),scope:{channelId:r}};(n=e.contentWindow)===null||n===void 0||n.postMessage(a,"*")})},Ke=function(e){(0,f.g)(r,e);function r(t,n,s){s===void 0&&(s={});var i=e.call(this,t,n,(0,f.h)((0,f.h)({},s),{bundlerURL:s.bundlerURL}))||this;return i._modulesCache=new Map,i.messageChannelId=(0,L.g)(),i._initPromise=null,i.emitter=new L.E,i.manageIframes(t),i.emulator=new Be({iframe:i.emulatorIframe,runtimeUrl:i.options.bundlerURL}),i.updateSandbox(n),i}return r.prototype._init=function(t){return(0,f._)(this,void 0,void 0,function(){return(0,f.a)(this,function(n){switch(n.label){case 0:return[4,this.emulator.connect()];case 1:return n.sent(),[4,this.emulator.fs.init(t)];case 2:return n.sent(),[4,this.globalListeners()];case 3:return n.sent(),[2]}})})},r.prototype.compile=function(t){return(0,f._)(this,void 0,void 0,function(){var n,s;return(0,f.a)(this,function(i){switch(i.label){case 0:return i.trys.push([0,5,,6]),this.status="initializing",this.dispatch({type:"start",firstLoad:!0}),this._initPromise||(this._initPromise=this._init(t)),[4,this._initPromise];case 1:return i.sent(),this.dispatch({type:"connected"}),[4,this.createShellProcessFromTask(t)];case 2:return n=i.sent().id,[4,this.createPreviewURLFromId(n)];case 3:return i.sent(),[4,this.setLocationURLIntoIFrame()];case 4:return i.sent(),this.dispatchDoneMessage(),[3,6];case 5:return s=i.sent(),this.dispatch({type:"action",action:"notification",notificationType:"error",title:(0,L.a)(s)}),this.dispatch({type:"done",compilatonError:!0}),[3,6];case 6:return[2]}})})},r.prototype.createShellProcessFromTask=function(t){return(0,f._)(this,void 0,void 0,function(){var n,s,i=this;return(0,f.a)(this,function(a){switch(a.label){case 0:return n=(0,L.r)(t["/package.json"]),this.emulatorCommand=(0,L.b)(n),this.emulatorShellProcess=this.emulator.shell.create(),[4,this.emulatorShellProcess.on("exit",function(o){i.dispatch({type:"action",action:"notification",notificationType:"error",title:(0,f.c)("Error: process.exit(".concat(o,") called."))})})];case 1:return a.sent(),[4,this.emulatorShellProcess.on("progress",function(o){var c,l;if(o.state==="command_running"||o.state==="starting_command"){i.dispatch({type:"shell/progress",data:(0,f.h)((0,f.h)({},o),{command:[(c=i.emulatorCommand)===null||c===void 0?void 0:c[0],(l=i.emulatorCommand)===null||l===void 0?void 0:l[1].join(" ")].join(" ")})}),i.status="installing-dependencies";return}i.dispatch({type:"shell/progress",data:o})})];case 2:return a.sent(),this.emulatorShellProcess.stdout.on("data",function(o){i.dispatch({type:"stdout",payload:{data:o,type:"out"}})}),this.emulatorShellProcess.stderr.on("data",function(o){i.dispatch({type:"stdout",payload:{data:o,type:"err"}})}),[4,(s=this.emulatorShellProcess).runCommand.apply(s,this.emulatorCommand)];case 3:return[2,a.sent()]}})})},r.prototype.createPreviewURLFromId=function(t){var n;return(0,f._)(this,void 0,void 0,function(){var s;return(0,f.a)(this,function(i){switch(i.label){case 0:return this.iframePreviewUrl=void 0,[4,this.emulator.preview.getByShellId(t)];case 1:return s=i.sent().url,this.iframePreviewUrl=s+((n=this.options.startRoute)!==null&&n!==void 0?n:""),[2]}})})},r.prototype.manageIframes=function(t){var n;if(typeof t=="string"){var s=document.querySelector(t);(0,f.n)(s,"The element '".concat(t,"' was not found")),this.iframe=document.createElement("iframe")}else this.iframe=t;ze(this.iframe,this.options),(0,f.n)(this.iframe.parentNode,"The given iframe does not have a parent."),this.emulatorIframe=document.createElement("iframe"),this.emulatorIframe.classList.add("sp-bridge-frame"),(n=this.iframe.parentNode)===null||n===void 0||n.appendChild(this.emulatorIframe)},r.prototype.setLocationURLIntoIFrame=function(){return(0,f._)(this,void 0,void 0,function(){return(0,f.a)(this,function(t){switch(t.label){case 0:return this.iframePreviewUrl?[4,Ve(this.iframe,this.iframePreviewUrl)]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})},r.prototype.dispatchDoneMessage=function(){this.status="done",this.dispatch({type:"done",compilatonError:!1}),this.iframePreviewUrl&&this.dispatch({type:"urlchange",url:this.iframePreviewUrl,back:!1,forward:!1})},r.prototype.globalListeners=function(){return(0,f._)(this,void 0,void 0,function(){var t=this;return(0,f.a)(this,function(n){switch(n.label){case 0:return window.addEventListener("message",function(s){s.data.type===He&&Ye(t.iframe,t.messageChannelId),s.data.type==="urlchange"&&s.data.channelId===t.messageChannelId?t.dispatch({type:"urlchange",url:s.data.url,back:s.data.back,forward:s.data.forward}):s.data.channelId===t.messageChannelId&&t.dispatch(s.data)}),[4,this.emulator.fs.watch(["*"],[".next","node_modules","build","dist","vendor",".config",".vuepress"],function(s){return(0,f._)(t,void 0,void 0,function(){var i,a,o,c,l,v,g;return(0,f.a)(this,function(_){switch(_.label){case 0:return s?(i=s,a="newPath"in i?i.newPath:"path"in i?i.path:"",[4,this.emulator.fs.stat(a)]):[2];case 1:if(o=_.sent().type,o!=="file")return[2,null];_.label=2;case 2:switch(_.trys.push([2,10,,11]),c=i.type,c){case"change":return[3,3];case"create":return[3,3];case"remove":return[3,5];case"rename":return[3,6];case"close":return[3,8]}return[3,9];case 3:return[4,this.emulator.fs.readFile(i.path,"utf8")];case 4:return l=_.sent(),this.dispatch({type:"fs/change",path:i.path,content:l}),this._modulesCache.set(i.path,(0,L.w)(l)),[3,9];case 5:return this.dispatch({type:"fs/remove",path:i.path}),this._modulesCache.delete(i.path),[3,9];case 6:return this.dispatch({type:"fs/remove",path:i.oldPath}),this._modulesCache.delete(i.oldPath),[4,this.emulator.fs.readFile(i.newPath,"utf8")];case 7:return v=_.sent(),this.dispatch({type:"fs/change",path:i.newPath,content:v}),this._modulesCache.set(i.newPath,(0,L.w)(v)),[3,9];case 8:return[3,9];case 9:return[3,11];case 10:return g=_.sent(),this.dispatch({type:"action",action:"notification",notificationType:"error",title:(0,L.a)(g)}),[3,11];case 11:return[2]}})})})];case 1:return n.sent(),[2]}})})},r.prototype.restartShellProcess=function(){var t;return(0,f._)(this,void 0,void 0,function(){return(0,f.a)(this,function(n){switch(n.label){case 0:return this.emulatorShellProcess&&this.emulatorCommand?(this.dispatch({type:"start",firstLoad:!0}),this.status="initializing",[4,this.emulatorShellProcess.kill()]):[3,3];case 1:return n.sent(),(t=this.iframe)===null||t===void 0||t.removeAttribute("attr"),this.emulator.fs.rm("/node_modules/.vite",{recursive:!0,force:!0}),[4,this.compile(Object.fromEntries(this._modulesCache))];case 2:n.sent(),n.label=3;case 3:return[2]}})})},r.prototype.updateSandbox=function(t){var n=this,s,i=(0,L.f)(t.files);if(((s=this.emulatorShellProcess)===null||s===void 0?void 0:s.state)==="running"){Object.entries(i).forEach(function(a){var o=a[0],c=a[1];(!n._modulesCache.get(o)||(0,L.r)(c)!==(0,L.r)(n._modulesCache.get(o)))&&n.emulator.fs.writeFile(o,c,{recursive:!0})});return}this.dispatch({codesandbox:!0,modules:i,template:t.template,type:"compile"}),Object.entries(i).forEach(function(a){var o=a[0],c=a[1];n._modulesCache.set(o,(0,L.w)(c))})},r.prototype.dispatch=function(t){var n,s;return(0,f._)(this,void 0,void 0,function(){var i;return(0,f.a)(this,function(a){switch(a.label){case 0:switch(i=t.type,i){case"compile":return[3,1];case"refresh":return[3,2];case"urlback":return[3,4];case"urlforward":return[3,4];case"shell/restart":return[3,5];case"shell/openPreview":return[3,6]}return[3,7];case 1:return this.compile(t.modules),[3,8];case 2:return[4,this.setLocationURLIntoIFrame()];case 3:return a.sent(),[3,8];case 4:return(s=(n=this.iframe)===null||n===void 0?void 0:n.contentWindow)===null||s===void 0||s.postMessage(t,"*"),[3,8];case 5:return this.restartShellProcess(),[3,8];case 6:return window.open(this.iframePreviewUrl,"_blank"),[3,8];case 7:this.emitter.dispatch(t),a.label=8;case 8:return[2]}})})},r.prototype.listen=function(t){return this.emitter.listener(t)},r.prototype.destroy=function(){this.emulatorIframe.remove(),this.emitter.cleanup()},r}($e.S)}}]);
}());