(()=>{"use strict";var e={993:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.httpServer=void 0;const s=i(r(147)),u=i(r(17)),c=i(r(685));t.httpServer=c.createServer((function(e,t){const r=u.resolve(u.dirname(""))+("/"===e.url?"/front/index.html":"/front"+e.url);s.readFile(r,(function(e,r){if(e)return t.writeHead(404),void t.end(JSON.stringify(e));t.writeHead(200),t.end(r)}))}))},352:e=>{e.exports=require("ws")},147:e=>{e.exports=require("fs")},685:e=>{e.exports=require("http")},17:e=>{e.exports=require("path")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}(()=>{const e=r(993),t=r(352);console.log("Start static http server on the 8181 port!"),e.httpServer.listen(8181),new t.WebSocketServer({port:8080}).on("connection",(function(e){e.on("message",(function(e){console.log("received: %s",e)})),e.send("something")}))})()})();