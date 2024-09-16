/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://social-network.samuraijs.com',
        // secure: false,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/1.0'),
      },
    },
  },
});
