import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Use esbuild for minification (faster and doesn't require terser)
    minify: 'esbuild',
    sourcemap: false,
    cssCodeSplit: false, // Single CSS file for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Keep React together for better tree-shaking
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router-dom']
        },
        // Optimize chunk size
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  server: {
    port: 3000,
    open: false
  },
  preview: {
    port: 4173,
    open: true
  }
})
