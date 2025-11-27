import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // username.github.io는 루트
  build: {
    outDir: 'dist'
  }
})