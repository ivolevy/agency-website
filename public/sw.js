// Service Worker básico para Dota Solutions
const CACHE_NAME = 'dota-solutions-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo.webp',
  '/icon-192x192.png',
  '/icon-96x96.png',
  '/icon-48x48.png'
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptar peticiones
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Devolver desde cache si existe, sino hacer fetch
        return response || fetch(event.request);
      })
  );
});
