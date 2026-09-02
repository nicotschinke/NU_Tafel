const CACHE_NAME = "NU_Tafel_v1";
const ASSETS_TO_CACHE = [
  "/NU_atlas_1.webp",
  "/EW_atlas_3.webp",
  "/createjs.min.js",
  "/your-code.min.js"
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
