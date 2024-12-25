import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from "path";
import compression from "vite-plugin-compression";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    compression(),
    ViteImageOptimizer({
      png: {
        quality: 40,
      },
      jpeg: {
        quality: 40,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      output: {
        chunkFileNames: "[name].[hash].js", // Общее имя для чанков
        entryFileNames: "[name].[hash].js", // Общее имя для точек входа
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"], // Включите сюда внешние библиотеки
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
})
