if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let a={};const o=e=>c(e,t),r={module:{uri:t},exports:a,require:o};s[t]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(i(...e),a)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0b7b90cd.26a3995d0dc7cc17.js",revision:"zJcvceJBuGcIhsN7AJoNK"},{url:"/_next/static/chunks/503.d7d0cc1bc51d3a54.js",revision:"zJcvceJBuGcIhsN7AJoNK"},{url:"/_next/static/chunks/651.e7ad805f32a091cd.js",revision:"zJcvceJBuGcIhsN7AJoNK"},{url:"/_next/static/chunks/framework-8957c350a55da097.js",revision:"zJcvceJBuGcIhsN7AJoNK"},{url:"/_next/static/chunks/main-b89e7c6359538933.js",revision:"zJcvceJBuGcIhsN7AJoNK"},{url:"/_next/static/chunks/pages/%5Bslug%5D-91fce462854de563.js",revision:"zJcvceJBuGcIhsN7AJoNK"},{url:"/_next/static/chunks/pages/_app-1359bddcd36c749a.js",revision:"zJcvceJBuGcIhsN7AJoNK"},{url:"/_next/static/chunks/pages/_error-1f95674706ce531a.js",revision:"zJcvceJBuGcIhsN7AJoNK"},{url:"/_next/static/chunks/pages/index-52b58331825c0ba8.js",revision:"zJcvceJBuGcIhsN7AJoNK"},{url:"/_next/static/chunks/pages/place/%5Bslug%5D-352cbae5e30b5f92.js",revision:"zJcvceJBuGcIhsN7AJoNK"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"zJcvceJBuGcIhsN7AJoNK"},{url:"/_next/static/chunks/webpack-a8642868d11c9eb3.js",revision:"zJcvceJBuGcIhsN7AJoNK"},{url:"/_next/static/zJcvceJBuGcIhsN7AJoNK/_buildManifest.js",revision:"zJcvceJBuGcIhsN7AJoNK"},{url:"/_next/static/zJcvceJBuGcIhsN7AJoNK/_middlewareManifest.js",revision:"zJcvceJBuGcIhsN7AJoNK"},{url:"/_next/static/zJcvceJBuGcIhsN7AJoNK/_ssgManifest.js",revision:"zJcvceJBuGcIhsN7AJoNK"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/img/hero-illustration.svg",revision:"230a82bf089de97df8033e600743b63e"},{url:"/img/icon-192.png",revision:"d27169d080684ebb57b8387d05c4b444"},{url:"/img/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/img/logo-gh.svg",revision:"23a2363ecf2979b48ec506aca545b574"},{url:"/img/logo.svg",revision:"dd1d47fda1d52219e1b9b0556f3f24e6"},{url:"/manifest.json",revision:"f87f5b90a017c09298198aa7fd0ec1b7"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
