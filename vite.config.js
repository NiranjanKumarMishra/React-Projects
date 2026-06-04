import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  // ✅ GitHub Pages ke liye base path set karo
  base: "/Agency-ai/",   // yahan apne repo ka naam daalo
  server: {
    port: 5173,               // local dev server port (optional)
    open: true                // browser auto open karega
  },
  build: {
    outDir: "dist",           // build output folder
    sourcemap: true           // debugging ke liye sourcemap
  }
})
