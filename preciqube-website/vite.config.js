import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/preciqube_webpage1.0/',  // 👈 repo name here
  plugins: [react()],
})

