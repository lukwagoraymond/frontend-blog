import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'public/db',
  plugins: [react()],
  test: {
    globals: true,
    // Add jsdom to vite
    environment: "jsdom",
    //
    setupFiles: './src/tests/setupTest.js'
  },
})
