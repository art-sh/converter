if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),a={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>a[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-4b7ad3f1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/bootstrap-icons-BOrJxbIo.woff",revision:null},{url:"assets/bootstrap-icons-BtvjY1KL.woff2",revision:null},{url:"assets/index-2xRVlNmj.js",revision:null},{url:"assets/index-DKNBJmMb.css",revision:null},{url:"index.html",revision:"e2c06a85992c6932600ebcd88544b5a8"},{url:"manifest.webmanifest",revision:"bbd0398a6b85004ebe50223a6f01f73d"},{url:"registerSW.js",revision:"d2a3ca18ddeb16c94179016e11b419ba"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"manifest.webmanifest",revision:"bbd0398a6b85004ebe50223a6f01f73d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({url:e})=>e.pathname.startsWith("/")),new e.CacheFirst({cacheName:"build-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));