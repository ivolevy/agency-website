import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    // Optimizaciones para mejorar FCP
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendor chunks para mejor caching
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['framer-motion'],
        },
      },
    },
    // Optimizaciones de CSS
    cssCodeSplit: true,
    // Optimizaciones de assets
    assetsInlineLimit: 4096, // 4kb
    // Minificación
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  // Optimizaciones de desarrollo
  server: {
    hmr: {
      overlay: false,
    },
  },
  // Optimizaciones de assets
  assetsInclude: ['**/*.ttf', '**/*.woff', '**/*.woff2'],
})
