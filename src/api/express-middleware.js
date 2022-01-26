const express = require('express');
// express实例
const app = express();
app.get('middleware', (req, res) => {
    res.json({
        message: 'ok'
    });
})

app.listen(3000, 'localhost', () => {
    console.log('服务启动成功')
})