// Service worker da Biblioteca de Beco: busca sempre a versão nova quando há internet
// e cai na cópia guardada quando não há (assim o app abre offline no iPad/celular).
const CACHE = "beco-v1";
const FILES = ["./", "./index.html", "./Biblioteca%20de%20Beco.html", "./manifest.webmanifest", "./icon-180.png", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if(req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  const net = fetch(req).then(r => {
    if(r.ok){ const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); }
    return r;
  });
  const fromCache = () => caches.match(req, {ignoreSearch:true}).then(r => r || caches.match("./Biblioteca%20de%20Beco.html"));
  const slow = new Promise(res => setTimeout(res, 5000, null));
  e.respondWith(Promise.race([net.catch(() => null), slow]).then(r => r || fromCache().then(c => c || net)));
});
