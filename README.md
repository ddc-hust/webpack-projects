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
## 9. 脚本用法
    * webpack 直接打包输出
    * webpack serve 启动开发服务器，内存编译打包没有输出

## 10. SourceMap
    * 将打包后的代码的行和列映射会源文件的位置，帮助找出错误所在
    * 开发模式：cheap-module-source-map
        * 优点：打包编译速度快，只包含行映射
        * 缺点：没有列映射
    ```js
        module.exports = {
        // 其他省略
        mode: "development",
        devtool: "cheap-module-source-map",
        };
    ```
    * 生产模式：source-map
        * 优点：包含行/列映射
        * 缺点：打包编译速度更慢
    ```js
        module.exports = {
        // 其他省略
        mode: "production",
        devtool: "source-map",
        };
    ```
## 11.提升打包构建速度
    1. HMR，热替换，当修改某个模块的时候，只有这个模块需要重新打包编译，其它模块不变。（在程序运行中替换删除模块，而无需重新加载整个页面）。（vue-loader和react-hot-loader可以HMR）
    2. OneOf：打包时通过test正则选择使用哪一个loader处理，使用OneOf就可以选择其中一个
    3. Include/exclude: 比如对js文件的处理，排除node_modules下的js文件
    4. Cache: 对eslint和babel编译结果进行缓存（在eslint插件下设置cache:true, 在js的loader下设置cacheDirectory:true）
    5. 开始多进程
## 12. 减少代码体积
    1. Tree Shaking
    2. babel：babel为每一个文件都加入了辅助代码，使得代码体积过大。使用@babel/plugin-transform-runtime
    3. image-minimize-webpack-plugin：压缩图片体积