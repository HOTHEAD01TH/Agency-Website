import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ensure proper aliasing for react-router-dom
      // eslint-disable-next-line no-undef
      'react-router-dom': path.resolve(__dirname, 'node_modules/react-router-dom'),
    },
  },
});
