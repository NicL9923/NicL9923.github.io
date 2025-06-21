import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/NicL9923.github.io/',
  build: {
    outDir: 'dist',
  },
})
