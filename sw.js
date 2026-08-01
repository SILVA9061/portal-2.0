// Arquivo sw.js - Service Worker
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Instalado');
});

self.addEventListener('fetch', (e) => {
    // Apenas para passar no teste de PWA do Chrome e liberar o botão "Instalar"
});