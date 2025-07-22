const CACHE_NAME = 'kunt-in-v1';
const urlsToCache = [
  '/',
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

// Set this to true to disable cache (e.g., in development)
const isDevMode = false; // Change to true to disable cache during development

self.addEventListener('install', function(event) {
  if (isDevMode) {
    // Skip caching in dev mode
    return;
  }
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  if (isDevMode) {
    // Always fetch from network in dev mode
    event.respondWith(fetch(event.request));
    return;
  }
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});
