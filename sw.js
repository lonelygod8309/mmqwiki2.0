if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,t)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const o={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return o;default:return e(r)}}))).then((e=>{const r=t(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-3159e126"],(function(e){"use strict";importScripts("https://cdn.jsdelivr.net/npm/workbox-sw@6.0.2/build/workbox-sw.min.js"),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"62bd11466f27af8824fc45198ef5d377"},{url:"src.52971ca3.js",revision:"3268768a520bc517f81ece9b90e7619c"},{url:"src.76d6d248.css",revision:"25843c4e89bf9acbcf33fb44e8999ce9"},{url:"WebCell-0.f1ffd28b.png",revision:"8097ecfd687ded98721d28d6823561c1"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=sw.js.map
