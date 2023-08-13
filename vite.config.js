import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/getCompletion': 'http://localhost:5001',
      '/getArticle': 'http://localhost:5001',
    },
  },
  plugins: [react()],
})
