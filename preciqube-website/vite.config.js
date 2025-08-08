import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/https://www.preciqube.com/',  // 👈 repo name here
  plugins: [react()],
})

