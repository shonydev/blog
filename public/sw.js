const CACHE_NAME='shon-pwa-v1';
const SHELL=['/blog/','/blog/index.html','/blog/manifest.webmanifest','/blog/icons/icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
 if(u.origin===self.location.origin&&r.mode==='navigate'){e.respondWith(fetch(r).then(res=>{const copy=res.clone();caches.open(CACHE_NAME).then(c=>c.put(r,copy));return res;}).catch(async()=>await caches.match(r)||await caches.match('/blog/index.html')));return;}
 e.respondWith(caches.match(r).then(cached=>cached||fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque')){const copy=res.clone();caches.open(CACHE_NAME).then(c=>c.put(r,copy));}return res;}).catch(()=>cached)));
});