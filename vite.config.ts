import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/sb1-rvrvm7v5/', // Set your desired base URL
  build: {
    outDir: 'docs', // Change output directory to 'docs'
  },
});
