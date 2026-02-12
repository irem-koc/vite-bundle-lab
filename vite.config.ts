import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      emitFile: true,
      filename: 'stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
      template: 'treemap'
    })
  ],
  build: {
  rollupOptions: {
    output: {
      manualChunks(id) {
  if (id.includes('node_modules')) {
    if (id.includes('antd')) return 'antd-vendor';
    if (id.includes('react')) return 'react-vendor';
    if (id.includes('lodash')) return 'lodash-vendor';
    return 'vendor';
  }
}

    }
  }
}

});
