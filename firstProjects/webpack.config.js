const path = require('path');//common.js模块化规范
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js",
        clean: true, // 自动将上次打包目录资源清空
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                 // use 数组里面 Loader 执行顺序是从右到左
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            //处理图片资源
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",//图片文件输出到dist文件夹中，相当于url-loader, 将文件转化成 Webpack 能识别的资源，同时小于某个大小的资源会处理成 data URI 形
                parser: {
                    dataUrlCondition: {
                      maxSize: 10 * 1024 // 小于10kb的图片会被base64处理，直接内嵌js中，
                    }
                  }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // 排除node_modules代码不编译
                loader: "babel-loader",
              },
        ],
    },
    plugins: [
        new ESLintWebpackPlugin({
            // 指定检查文件的根目录
            context: path.resolve(__dirname, "src"),
        }),
        new HtmlWebpackPlugin({
            // 以 public/index.html 为模板创建文件
            // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
            templat: path.resolve(__dirname, "public/index.html"),
        })
    ],
    //开发服务器
    devServer: {
        host: "localhost",//域名
        port: "3000",   //端口号
        open: true, //是否自动打开浏览器
    },
    mode: 'development',
};