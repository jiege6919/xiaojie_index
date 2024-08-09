import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'


export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        cleanupOutdatedCaches: true,
        // globPatterns: [
        //   '**/*.{css,js}',
        //   '**/*.{jpg,jpeg,png,webp,mp3,woff2,xml,json,ico,svg,gif}',
        //   '**/*.html' 
        // ],
        runtimeCaching: [
          {
            urlPattern: /\.(?:html)$/,
            handler: 'NetworkFirst', // 优先从网络获取，如果失败则从缓存中获取
            options: {
              cacheName: 'html-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 缓存 30 天
              },
            },
          },
          {
            urlPattern: /\.(?:css|js)$/,
            handler: 'StaleWhileRevalidate', // 先使用缓存，并异步获取更新
            options: {
              cacheName: 'css&js-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 缓存 30 天
              },
            },
          },
          {
            urlPattern: /\.(?:jpg|jpeg|png|webp|mp3|woff2|xml|json|ico|svg|gif)$/,
            handler: 'CacheFirst', // 优先使用缓存
            options: {
              cacheName: 'static-cache',
              expiration: {
                maxEntries: 100, // 可以根据需要调整
                maxAgeSeconds: 30 * 24 * 60 * 60, // 缓存 30 天
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      injectRegister: 'auto',
      manifest: false,
      devOptions: {
        enabled: true
      }
    })
  ],
});
