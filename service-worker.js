(function () {
    "use strict";


    let CACHE_NAME = 'static-cacheV1.1';

    let urlsToCache = [
        '.',
        '/',
        'index.html',
        'forum.html',
        'css/',
        '/js/vendor/jquery.min.js',
        '/js/foundation.min.js',
        '/js/chairKit.min.js'
    ];

    self.addEventListener('install', function (event) {
        event.waitUntil(
            caches.open(CACHE_NAME)
                .then(function (cache) {
                    console.log('install cache files:');
                    return cache.addAll(urlsToCache);
                })
        );
    });

    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {
            event.respondWith(
                caches.match(event.request).then(function (response) {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request).then(function (response) {
                        return caches.open(CACHE_NAME).then(function (cache) {
                            cache.put(event.request.url, response.clone());
                            return response;
                        });
                    });
                })
            );
        }
    });

    self.addEventListener('activate', function (event) {
        // console.log('Service worker activating...');
        let cacheWhitelist = [CACHE_NAME];

        event.waitUntil(
            caches.keys().then(function (cacheNames) {
                return Promise.all(
                    cacheNames.map(function (cacheName) {
                        if (cacheWhitelist.indexOf(cacheName) === -1) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
        );
    });


})();