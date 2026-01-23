const CACHE_NAME = 'rumi-timer-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './home-bg.jpg', 
  './icon.png'
];

// インストール時にファイルをキャッシュ
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// オフラインでもキャッシュから表示
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
