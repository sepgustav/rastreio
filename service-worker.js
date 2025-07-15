// Este é um service worker básico. Para um PWA completo com cache offline,
// você precisaria adicionar lógica de cache aqui.
// Para este app, ele apenas registra o service worker.

self.addEventListener('install', (event) => {
  console.log('Service Worker: Instalado');
  // O Service Worker é ativado imediatamente após a instalação.
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Ativado');
  // Reivindica clientes para que o Service Worker controle todas as abas abertas.
  event.waitUntil(clients.claim());
});

// Para este app, não precisamos de lógica de 'fetch' para cache offline,
// pois o objetivo é sempre abrir o 17TRACK online.
// Se você quisesse funcionalidades offline, adicionaria o cache aqui.
/*
self.addEventListener('fetch', (event) => {
  // Exemplo de como você poderia interceptar requisições
  // e servir do cache, se o app fosse offline-first.
  // event.respondWith(
  //   caches.match(event.request).then((response) => {
  //     return response || fetch(event.request);
  //   })
  // );
});
*/
