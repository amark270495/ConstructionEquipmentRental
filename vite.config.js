import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // By removing the 'base' property, Vite will default to using relative asset paths.
  // This is the most robust and compatible setting for hosting providers like Azure.
})