import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',   // relative paths so it works at any GitHub Pages URL
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  }
})
