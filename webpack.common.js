const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin") // 导入 在内存中自动生成html文件 的插件

// 创建多入口应用
// const pages = require("./page.config");
// const pagesPlugins = [];
// const entryObjs = {};
// pages.forEach(page => {
//     entryObjs[page.name] = `./src/${page.entry}`;
//     pagesPlugins.push(new htmlWebpackPlugin({
//         title: page.name, // 用于生成的 HTML 文档的标题
//         template: path.join(__dirname, `src/${page.template}`), // webpack模板的相对或绝对路径
//         filename: path.join(__dirname, `dist/${page.name}.html`), // 将 HTML 写入到的文件
//         inject: true, // true || 'head' || 'body' || false将所有资产注入给定的template or templateContent
//         chunks: [page.name] // 不配置chunks会导致多个入口同时进入；允许您仅添加一些块（例如，仅单元测试块）
//     }));
// })

// 创建单入口
const page = new htmlWebpackPlugin({ template: path.join(__dirname, 'src/html-template/index.html'), filename: path.join(__dirname, 'dist/index.html') });

// 向外暴露一个打包的实例对象，因为webpack是基于Node构建的，所以webpack支持所有Node API和语法
// webpack 默认只能打包处理.js后缀名类型的文件，想.vue .png无法主动处理，所以要配置第三方的loader
module.exports = {
    // entry: entryObjs,
    // plugins: pagesPlugins,
    plugins: [page],
    module: { // 所有第三方模块的配置规则
        rules: [ // 第三方匹配规则
            {
                test: /\.js|jsx$/,
                use: "babel-loader",
                exclude: /node_modules/ // exclude千万别忘记
            }, {
                test: /\.js|jsx$/,
                enforce: 'pre',
                use: [{
                    loader: "eslint-loader",
                    options: { fix: true }
                }],
                include: path.resolve(__dirname, './src/**/*.js'),
                exclude: /node_modules/
            }
        ],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'res/[name]/bundle.js'
    }
}