const path = require("path")
const { merge } = require("webpack-merge");
const commonjs = require("./webpack.common");
module.exports = merge(commonjs, {
    mode: "development",
    devtool: 'cheap-module-eval-source-map', // 浏览器调试源码
    target: "web",
    devServer: {
        open: true,
        contentBase: path.join(__dirname, "./dist/"),
        historyApiFallback: true, //不跳转；刷新页面不会报错【即会对404页面响应index.html】
        inline: true, //实时刷新
        hot: true, // 开启热更新,
        port: 8000,
    },
    optimization: {
        
    },
    module: { // 所有第三方模块的配置规则
        rules: [ // 第三方匹配规则
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },{
                test: /\.svg$/,
                // exclude: /node_modules/,
                use: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|woff|woff2|ttf|eot|otf|webm|xlsx)$/,
                // exclude: /node_modules/,
                use: 'file-loader'
            }
        ],
    }
})