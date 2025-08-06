import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   includeAssets: [
    //     'favicon/favicon.svg',
    //     'favicon/apple-touch-icon.png',
    //     'favicon/favicon.ico',
    //     'icon-192x192.png',
    //     'icon-512x512.png',
    //     'offline.html'
    //   ],
    //   manifest: {
    //     name: 'Paola T.',
    //     short_name: 'PaolaT',
    //     start_url: '/',
    //     display: 'standalone',
    //     background_color: '#ffffff',
    //     theme_color: '#000000',
    //     icons: [
    //       {
    //         src: '/icon-192x192.png',
    //         sizes: '192x192',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/icon-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //       },
    //     ],
    //   },
    //   workbox: {
    //     runtimeCaching: [
    //       {
    //         urlPattern: /^https:\/\/.*/,
    //         handler: 'NetworkFirst',
    //         options: {
    //           cacheName: 'external-cache',
    //           networkTimeoutSeconds: 3,
    //           expiration: {
    //             maxEntries: 10,
    //             maxAgeSeconds: 60 * 60 * 24,
    //           },
    //           cacheableResponse: {
    //             statuses: [0, 200],
    //           },
    //         },
    //       },
    //     ],
    //     navigateFallback: '/offline.html',
    //   },
    // }),
  ],
})
