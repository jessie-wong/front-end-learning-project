const http = require('http');
const server = http.createServer((req, res) => {
    res.end('hello');
})
server.listen(3000, 'localhost', () => {
    console.log('服务器启动成功');
})
// 配置nodemobe
// 1. install
// 2. 修改启动命令
// 3. 通过新增nodemon.json配置指定特殊的watch模块
