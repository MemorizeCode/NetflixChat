import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from "path";
import compression from "vite-plugin-compression";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import EnvironmentPlugin from 'vite-plugin-environment';
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
        chunkFileNames: "[name].[hash].js", 
        entryFileNames: "[name].[hash].js", 
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"], 
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
})
