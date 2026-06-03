import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import PrerenderPlugin from 'vite-plugin-prerender' // ← pas de { }

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    PrerenderPlugin({
      staticDir: fileURLToPath(new URL('./dist', import.meta.url)),
      routes: ['/'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3333,
  },
})