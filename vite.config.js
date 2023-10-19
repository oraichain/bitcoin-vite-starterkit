import { defineConfig } from 'vite';
import inject from '@rollup/plugin-inject';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [inject({ modules: { Buffer: ['buffer', 'Buffer'] } })]
    }
  }
});
