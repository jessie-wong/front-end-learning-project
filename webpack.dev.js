const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin") // 导入 在内存中自动生成html文件 的插件

// 创建多入口应用
const pages = require("./page.config");
const pagesPlugins = [];
const entryObjs = {};
pages.forEach(page => {
    entryObjs[page.name] = `./src/${page.name}/index.js`;
    pagesPlugins.push(new htmlWebpackPlugin({
        title: page.name,
        template: path.join(__dirname, `src/${page.template}`), // 源文件
        filename: path.join(__dirname, `dist/${page.name}.html`) // 生成的 内存中首页的 名称
    }));
})
// const page = new htmlWebpackPlugin({template: path.join(__dirname, 'src/html-template/index.html'), filename: path.join(__dirname, 'dist/index.html')});

// 向外暴露一个打包的实例对象，因为webpack是基于Node构建的，所以webpack支持所有Node API和语法
// webpack 默认只能打包处理.js后缀名类型的文件，想.vue .png无法主动处理，所以要配置第三方的loader
module.exports = {
    mode: 'development', // development 或 production
    entry: entryObjs,
    plugins: pagesPlugins,
    // plugins: [page],
    module: { // 所有第三方模块的配置规则
        rules: [ // 第三方匹配规则
            {
                test: /\.js|jsx$/,
                use: "babel-loader",
                exclude: /node_modules/ // exclude千万别忘记
            }
        ],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]/bundle.js'
    }
}