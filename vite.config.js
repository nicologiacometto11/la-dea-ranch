import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serve il sito su /la-dea-ranch/. Con un dominio personalizzato cambiare in '/'.
  base: '/la-dea-ranch/',
})
