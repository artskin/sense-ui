import { defineConfig } from 'vite';
import { resolve } from 'path';
// import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [],
	resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
	build: {
		lib: {
			entry: resolve(__dirname,'src/index.ts'),
			name: 'timer',
			fileName: (format) => `timer.${format}.js`
		},
		// rollupOptions: {
		// 	external: ['vue'],
		// 	output: {
		// 		globals: {
		// 			vue: 'Vue'
		// 		}
		// 	}
		// }
	}
})