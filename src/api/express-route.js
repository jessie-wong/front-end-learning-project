const express = require('express');
const App = express();
// App 是web服务实例

/**web服务 如何处理一个请求
    url --》网络--》dns解析--》目标服务器
    1. 如何响应这个请求--》路由//规则
        1. 请求的方法来区分：get---》响应；
        2. 通过uri区分（路径）www.baidu.com/a/c/a.html
*/
// 1. 通过请求的方法类型【get、post、put、delete】restful规范
App.get('/demo', (req,res)=>{
    // req：请求对象；res：服务响应对象
    res.json({
        message: 'hello express route from get demo'
    })
})
App.post('/demo', (req,res)=>{
    // req：请求对象；res：服务响应对象
    res.json({
        message: 'hello express route from get demo'
    })
})
// 2. 通过uri
App.get('/user/byname', (req, res) => {
    let {name} = req.query;
    res.json({
        message: 'ok',
        name
    })
})


// api
// 需要定义一个api/路由 需要满足 客户端 无论使用什么请求方式都能实现
App.all('/demo-all', (req, res) => {
    res.json({
        message: 'ok'
    })
})
// 无论客户使用 任何的uri 都能响应 ——日志
// App.all('*', (req, res) => {
//     res.json({
//         message: 'demo',
//         method: req.method,
//         uri: req.path
//     })
// })

// use
App.use('/demo-use', (req, res) => {
    res.json({
        message: 'use demo',
        method: req.method
    })
})
App.use((req, res) => {
    res.json({
        message: 'use demo',
        method: req.method,
        uri: req.path
    })
})

App.listen(3000, 'localhost', () => {
    console.log('服务器启动成功');
})