import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
  },
  // Ajoutez cette configuration :
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base: '/',
  esbuild: {
    drop: ['console', 'debugger'],
  },
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
  // Utilisez ce paramètre pour corriger le routage
  esbuild: true,

})