import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
    base: './', // 👈 YEH ADD KAREIN (Relative paths ke liye)
  publicDir: 'public', // 👈 YEH ADD KAREIN (Redirects file read karne ke liye)
})
