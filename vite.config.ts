import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTscofigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/e-commerce/',
  plugins: [react(), viteTscofigPaths()],
});
