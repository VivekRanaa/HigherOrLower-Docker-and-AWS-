import react from '@vitejs/plugin-react'
import {defineConfig} from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory for the production build
    minify: 'terser', // Minify the production build using Terser
    sourcemap: false, // Disable source maps in production for better performance
  },
})

