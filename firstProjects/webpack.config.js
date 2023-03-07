const path = require('path');//common.js模块化规范
const ESLintWebpackPlugin = require("eslint-webpack-plugin");

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

        ],
    },
    plugins: [
        new ESLintWebpackPlugin({
            context: path.resolve(__dirname, "src"),
        })
    ],
    mode: 'development',
};