const path = require("path")
const { merge } = require("webpack-merge");
const commonjs = require("./webpack.common");
module.exports = merge(commonjs, {
    mode: "production",
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
            }
        ],
    }
})