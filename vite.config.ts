import path from 'node:path';

import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] }), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shadcn': path.resolve(__dirname, './chadcn'),
      '@tests': path.resolve(__dirname, './__tests__'),
      '%': path.resolve(__dirname, './public'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
