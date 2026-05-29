import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Source - https://stackoverflow.com/a/79778775
// Posted by suhailvs
// Retrieved 2026-05-29, License - CC BY-SA 4.0

server: {  
    host: true  
}

})
