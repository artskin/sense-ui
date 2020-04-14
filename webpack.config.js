let path = require('path');
let webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
let outputDir = 'docs';
module.exports = {
    entry: {
        index:'./src/my-ts.ts',
        //base:'./src/style/root.styl'
    },
    output: {
        path: path.join(__dirname, outputDir), //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        filename: "bundle.ts.js"
    },
    resolve: {
        // 设置别名
        alias: {
            '@': path.resolve('src'),// 这样配置后 @ 可以指向 src 目录
            '~pkg': path.resolve('src/packages')// 这样配置后 @ 可以指向 src 目录
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.styl$/,
                //loader: 'style-loader!css-loader!stylus-loader'
                loader: 'css-loader!stylus-loader'
            },
            {
                test: /\.styl$/,
                include: path.join(__dirname,'src/style'),
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            //publicPath: 'style',
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {
                            //importLoader: 1
                        }
                    },
                    'stylus-loader',
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "style/base.css",
            chunkFilename: "[name].chunk.css"
        }),
        new CopyWebpackPlugin([
            {
              from:__dirname+'/public',
              to:__dirname+'/'+outputDir
            }
        ])
    ],
    devServer: {
        headers: {
            "X-Custom-Foo": "bar"
        },
        contentBase: path.join(__dirname, outputDir),
        compress: true,
        port: 9000
    },
    stats: {
        modules: false,// 关闭编译时node_modules文件提示信息
        entrypoints: false //关闭编译时插件entrypoint相关提示信息
    }
};