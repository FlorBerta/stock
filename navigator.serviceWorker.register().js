const staticcStockConin = "stock-conin-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/conin1.png",
  "/images/conin2.png",

]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticStockConin).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});