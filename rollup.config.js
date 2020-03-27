import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

import simplevars from 'postcss-simple-vars'; //可以使用Sass风格的变量
import nested from 'postcss-nested'; //允许使用嵌套规则
import cssnext from 'postcss-cssnext'; //允许使用最新CSS语法(通过最新的CSS标准)
import cssnano from 'cssnano'; //压缩，减小输出CSS文件大小

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/js/index.js',
	output: {
		file: 'dist/bundle.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		postcss({
			plugins:[
				//simplevars(),
				nested(),
				cssnext({warnForDuplicates:false}),
				cssnano(),
			],
			extensions: [ '.css' ],
		}),
		resolve(), // tells Rollup how to find date-fns in node_modules
		commonjs(), // converts date-fns to ES modules
		production && terser() // minify, but only in production
	]
};
