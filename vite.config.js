import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    vueDevTools(),
  ],
  base: '/rigors-landscaping-site/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build:{
    assetsDir: 'assets',
    rollupOptions:{
      output:{
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  }
})
