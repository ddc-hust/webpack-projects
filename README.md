## 1. webpack初使用
1. npm安装webpack以及webpack-cli
2. npx启动webpack
3. 结果：打包js文件，输出到dist目录

## 2. webpack配置文件
1. 建立webpack.config.js文件，填写基本配置
2. 使用npx webpack即可打包，效果同第一步一样

## 3. 使用loader处理样式资源
1. style-loader
2. css-loader
3. less-loader
4. sass-loader

## 4. 处理图片资源
1. webpack4中使用file-loader和url-loader
2. webpack5内置好了，无需指定loader，直接使用`type:asset`,表示相当于url-loader, 将文件转化成 Webpack 能识别的资源，同时小于某个大小的资源会处理成 data URI 形

## 5. 处理js资源
1. 使用eslint进行代码格式检查
    * 定义规则，rules。分三个等级，0，1， 2
    * 可以使用继承现有的规则，就不用自己手动写了
        * Eslint 官方的规则：eslint:recommended
        * Vue Cli 官方的规则：plugin:vue/essential
        * React Cli 官方的规则：react-app
    * 在webpack中使用eslint-webpack-plugin 插件 
2. 使用babel，@babel/preset-env。生成的main.js中箭头函数等es6的语法已被替换

## 6. 处理html资源
    * 插件HtmlWebpackPlugiin，可以生成html文件，并且在html文件中自动引入打包好的文件

## 7. 开发模式和生产模式
    * 开发者模式不需要得到编译的文件，只需要执行状态。所以开发者模式没有输出目录
    * 生产者模式需要指定输出目录

## 8. CSS处理
    * 抽离css文件
        * 使用style-loader，只是把css文件打包进js文件中，在js文件中通过生成style标签来引用，不太好这种方法
        * 应当把css文件抽离出来，形成单独的文件，通过link标签引用
        * 使用`MiniCssExtractPlugin`插件，抽离css文件
    * css的兼容性处理：postcss-loader postcss postcss-preset-env
    * css压缩
        * css-minimizer-webpack-plugin