import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { ViteGhPages } from 'vite-plugin-gh-pages'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // devOptions: {
      //   enabled: true,
      // },
      injectRegister: 'auto',
      manifest: {
        name: 'Конвертер валют',
        short_name: 'Конвертер',
        description: 'converter demo',
        theme_color: 'white',
        background_color: 'white',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [],
      },
      workbox: {
        globPatterns: ['**/*'],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.startsWith('/'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'build-cache',
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      includeAssets: ['**/*'],
    }),
    ViteGhPages({
      branch: 'gh-pages',
    }),
  ],
  server: {
    host: true,
  },
})
