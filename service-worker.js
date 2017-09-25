/* service-worker.js */
/* eslint-disable */
const filesToCache = [
  '/',
  '/index.html'
];
const cacheName = 'static-v1';
// install
self.addEventListener('install', event => {
  // console.log('SW installing...');
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      // console.log('Caching app ok');
      return cache.addAll(filesToCache);
    })
  );
});

// activate
self.addEventListener('activate', event => {
  // console.log('SW activate');
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      var promiseArr = cacheNames.map(function (item) {
        if (item !== cacheName) {
          // Delete that cached file
          return caches.delete(item);
        }
      })
      return Promise.all(promiseArr);
    })
  ); // end e.waitUntil
});

// fetch
self.addEventListener('fetch', event => {
  // console.log('SW handle fetch!');
	event.respondWith(
		caches.match(event.request).then(function (response) {
			return response || fetch(event.request).then(res =>
				caches.open(cacheName)
				.then(function(cache) {
					// cache.put(key, value)
					cache.put(event.request, res.clone());
					return res;
				})
			);
		})
	);

});
