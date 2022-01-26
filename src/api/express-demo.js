// 1. 安装
// 2. 
const express = require('express');
// express实例
const app = express();
// app.use((req, res) => {
//     res.json({
//         name: '张三'
//     })
// })
app.get('/name/:age', (req, res) => {
    let {age} = req.params;
    res.json({
        name: 'tom',
        age
    });
})
app.post('/name', (req, res) => {
    res.send('tom-post');
})
app.listen(3000, 'localhost', () => {
    console.log('服务器启动成功');
})