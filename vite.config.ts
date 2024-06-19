import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteTscofigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/e-commerce/',
  plugins: [react(), viteTscofigPaths()],
});
