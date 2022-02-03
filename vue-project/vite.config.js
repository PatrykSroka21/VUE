import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        background_color: 'white',
        display: 'standalone',
        icons: [
          {
            purpose: 'any',
            sizes: '192x192',
            src: 'manifest-icon-192.maskable.png',
            type: 'image/png'
          },
          {
            purpose: 'maskable',
            sizes: '192x192',
            src: 'manifest-icon-192.maskable.png',
            type: 'image/png'
          },
          {
            purpose: 'any',
            sizes: '512x512',
            src: 'manifest-icon-512.maskable.png',
            type: 'image/png'
          },
          {
            purpose: 'maskable',
            sizes: '512x512',
            src: 'manifest-icon-512.maskable.png',
            type: 'image/png'
          }
        ],
        name: 'About Patryk Sroka',
        short_name: 'APS',
        start_url: '.',
        theme_color: 'black'
      },
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['assets/**', 'index.html', 'manifest.webmanifest'],
        runtimeCaching: [
          {
            handler: 'NetworkFirst',

            urlPattern: 'https://jsonplaceholder.typicode.com/todos/'
          },
          {
            handler: 'NetworkFirst',
            // Regular expression to cache GET requests to
            // “https://avancera.app/cities/ID” (with or without a trailing
            // slash)
            urlPattern: /https:\/\/jsonplaceholder\.typicode\.com\/todos/
          }
        ]
      }
    }),
    vue()
  ]
})
