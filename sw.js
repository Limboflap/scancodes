/* Scancodes service worker: works offline, always tries the newest version first */
const C='scancodes-34';
const SHELL=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('scancodes-')&&k!==C&&k!=='scancodes-cdn').map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
function fresh(req){
  // altijd bij de server navragen of er iets nieuws is (niet de browsercache gebruiken)
  const net=fetch(req.url,{cache:'no-cache',credentials:'same-origin'}).then(r=>{if(r&&r.ok){const cp=r.clone();caches.open(C).then(c=>c.put(req,cp))}return r});
  const slow=new Promise(ok=>setTimeout(ok,3000)).then(()=>caches.match(req,{ignoreSearch:true}));
  return Promise.race([net.catch(()=>caches.match(req,{ignoreSearch:true})),slow.then(r=>r||net)])
    .then(r=>r||caches.match('index.html'));
}
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  const u=new URL(req.url);
  if(u.origin===location.origin){e.respondWith(fresh(req));return}
  if(u.hostname==='cdn.jsdelivr.net'){
    e.respondWith(caches.open('scancodes-cdn').then(c=>c.match(req).then(hit=>hit||fetch(req).then(r=>{if(r&&r.ok)c.put(req,r.clone());return r}))));
  }
});
