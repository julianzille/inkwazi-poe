/**
 * Inkwazi Field Guide POE - Service Worker
 * Provides offline capabilities and aggressive caching to minimize mobile data consumption.
 */

const CACHE_NAME = 'inkwazi-cache-v1';
const CORE_ASSETS = [
    './',
    './index.html',
    './styles.css',
    './app.js'
];

// 1. Install Event - Pre-cache core shell
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(CORE_ASSETS);
        }).then(() => self.skipWaiting())
    );
});

// 2. Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            );
        }).then(() => self.clients.claim())
    );
});

// 3. Fetch Event - Intelligent Caching Strategies
self.addEventListener('fetch', (event) => {
    const request = event.request;
    const url = new URL(request.url);

    // Only handle GET requests
    if (request.method !== 'GET') return;

    // Strategy 1: Cache First for static media and fonts (images, pdfs, webp, png, fonts, css, js)
    if (/\.(webp|png|jpg|jpeg|svg|pdf|woff2?|css|js)$/i.test(url.pathname)) {
        event.respondWith(
            caches.open(CACHE_NAME).then(async (cache) => {
                const cachedResponse = await cache.match(request);
                if (cachedResponse) {
                    return cachedResponse;
                }
                try {
                    const networkResponse = await fetch(request);
                    if (networkResponse.ok) {
                        cache.put(request, networkResponse.clone());
                    }
                    return networkResponse;
                } catch (err) {
                    return cachedResponse || Response.error();
                }
            })
        );
        return;
    }

    // Strategy 2: Stale-While-Revalidate for Markdown (.md) documents
    if (url.pathname.endsWith('.md')) {
        event.respondWith(
            caches.open(CACHE_NAME).then(async (cache) => {
                const cachedResponse = await cache.match(request);
                const fetchPromise = fetch(request).then((networkResponse) => {
                    if (networkResponse.ok) {
                        cache.put(request, networkResponse.clone());
                    }
                    return networkResponse;
                }).catch(() => cachedResponse);

                return cachedResponse || fetchPromise;
            })
        );
        return;
    }

    // Default Cache First with Network Fallback
    event.respondWith(
        caches.match(request).then((response) => {
            return response || fetch(request).then((networkResponse) => {
                if (networkResponse.ok && url.origin === location.origin) {
                    caches.open(CACHE_NAME).then((cache) => cache.put(request, networkResponse.clone()));
                }
                return networkResponse;
            });
        })
    );
});
