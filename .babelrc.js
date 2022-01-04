module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                // 根据环境支持度，加载所需部分polyfill
                "useBuiltIns": "usage",
                "corejs": 3
            }
        ],
        "@babel/preset-react"
    ],
    // "plugins": [
    //     // 使用babel-plugin-import 对ant按需加载
    //     ["import",
    //         {
    //             "libraryName": "antd",
    //             "libraryDirectory": "es",
    //             "style": false // `style: true` 会加载 less 文件
    //         }
    //     ],
    //     "@babel/plugin-proposal-class-properties",
    //     "@babel/plugin-proposal-export-default-from",
    //     "@babel/plugin-proposal-optional-chaining"
    // ]
};
