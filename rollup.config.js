import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
//import poststylus from 'poststylus';
import stylusWC from 'rollup-plugin-stylus-to-css'//stylus wc 组件专用
import stylus from 'stylus'


//import simplevars from 'postcss-simple-vars'; //可以使用Sass风格的变量
import nested from 'postcss-nested'; //允许使用嵌套规则
import cssnext from 'postcss-cssnext'; //允许使用最新CSS语法(通过最新的CSS标准)
import cssnano from 'cssnano'; //压缩，减小输出CSS文件大小

//启动服务
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

import copy from 'rollup-plugin-copy'
// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

// stylus.render({
// 	file:context
// },function(err,result){
// 	console.log(err,result)
// 	if(!err){
// 		resolve(result);
// 	}else{
// 		reject(err)
// 	}
// });
import stylusCompiler from 'rollup-plugin-stylus-compiler'
const processStylus = function(context) {
	//console.log('参数',context);

	stylus.render(context.str,{filename:'root.styl'},function(err,css){
		if(err) throw err;
		//console.log("读取内容",css)
	});
	
	// stylusCompiler.transform((ee)=>{
	// 	console.log('stylusCompiler',ee)
	// })
	
}


export default {
	input: 'src/js/index.js',
	output: {
		file: 'dist/bundle.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true,
		css:'dist/style'
	},
	plugins: [
		,
		stylusWC({fn:processStylus}),
		postcss({
			plugins:[
				//simplevars(),
				nested(),
				cssnext({warnForDuplicates:false}),
				cssnano(),
			],
			modules: true,
			include: '**/*.css',
			//process:processStylus,
			extensions: [ '.css','.stylus', '.styl' ],
		}),//.process(css,{from:'src/style/*.css',to:'dist/style/*.css'}),
		
		resolve(), // tells Rollup how to find date-fns in node_modules
		commonjs(), // converts date-fns to ES modules
		copy({
      targets: [
        { src: 'public/**/*', dest: 'dist' }
      ]
    }),
		production && terser(), // minify, but only in production
		serve('dist'),
		livereload('dist')
	]
};
