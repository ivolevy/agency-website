import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    // Optimizaciones básicas para mejorar FCP
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendor chunks para mejor caching
          vendor: ['react', 'react-dom'],
        },
      },
    },
    // Optimizaciones de CSS
    cssCodeSplit: true,
    // Minificación
    minify: 'terser',
  },
})
