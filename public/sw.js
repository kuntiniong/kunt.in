const CACHE_NAME = 'kunt-in-v1';
const urlsToCache = [
  '/',
  '/about',
  '/projects',
  '/courses',
  '/contact',
  '/css/styles.css',
  '/css/svg.css',
  '/css/material-symbols.css',
  '/css/projects.css',
  '/css/courses.css',
  '/css/contact.css',
  '/js/dark-mode.js',
  '/js/animation.js',
  '/images/favicon.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});
