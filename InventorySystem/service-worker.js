// Service Worker for 物料戰情室 PWA
const CACHE_NAME = 'inventory-system-v19.0';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// 安裝 Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Service Worker: 快取已開啟');
        return cache.addAll(urlsToCache);
      })
      .catch(function(err) {
        console.log('Service Worker: 快取失敗', err);
      })
  );
  self.skipWaiting();
});

// 啟用 Service Worker
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: 刪除舊快取', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// 攔截網路請求
self.addEventListener('fetch', function(event) {
  // 只快取 GET 請求
  if (event.request.method !== 'GET') {
    return;
  }
  
  // 不快取 API 請求（需要即時數據）
  if (event.request.url.includes('script.google.com')) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // 如果有快取，返回快取
        if (response) {
          return response;
        }
        
        // 否則從網路獲取
        return fetch(event.request).then(function(response) {
          // 檢查回應是否有效
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // 複製回應
          var responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(function(cache) {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        });
      })
      .catch(function() {
        // 如果網路失敗，返回離線提示
        return new Response('離線模式：無法載入資源', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      })
  );
});

