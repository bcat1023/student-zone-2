self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(
        [
          'c:/',
		  'e:/',
		  'https://student-zone.netlify.app/',
		  'https://student-zone.netlify.app/image/img.jpg'
        ]
      );
    })
  );
});