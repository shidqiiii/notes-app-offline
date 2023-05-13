self.addEventListener("install", () => {
    console.log("Service Worker: installed");
    self.skipWaiting();
});

self.addEventListener("activate", () => {
    console.log("Service Worker: activated");
});

self.addEventListener("fetch", () => {
    console.log("Service Worker: fetching");
    event.respondWith(fetch(event.request));
});
