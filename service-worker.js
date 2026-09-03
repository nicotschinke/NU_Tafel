const CACHE_NAME = "NU_Tafel";
const ASSETS_TO_CACHE = [
  "/images/NU_atlas_1.webp",
  "/images/EW_atlas_3.webp",
  "/images/_preloader.gif",
  "/createjs.min.js",
  "/index.html"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
