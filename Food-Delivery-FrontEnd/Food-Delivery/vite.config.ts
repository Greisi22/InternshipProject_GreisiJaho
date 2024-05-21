// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
    },
  },
  server: {
    port: 3000,
    host: 'localhost', // Change this line to 'localhost'
  },
  build: {
    outDir: './build',
  },
  
});
