import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts({
    outputDir: 'dist/types'
  })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'NumberCount',
      fileName: (format) => `number-count.${format}.js`
    }
  }
})