const path = require('path');//common.js模块化规范
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js",
    },
    module: {
        rules: [],
    },
    plugins: [],
    mode: 'development',
};