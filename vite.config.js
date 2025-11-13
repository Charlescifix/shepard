import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 8080,
    strictPort: false,
    allowedHosts: [
      '.railway.app',
      'shepard-production.up.railway.app',
      'localhost',
    ],
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})
