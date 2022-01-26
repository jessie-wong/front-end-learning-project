// 读取系统的cpu的信息
const os = require('os');
const cpus = os.cpus(); // 获取当前系统的cpu数量
console.log(cpus.length);

// 获取内存的信息
const total = os.totalmem(); // bytes
console.log(total/1024/1024/1024); // GB
const free = os.freemem();
console.log(free/1024/1024/1024); // GB

// web服务

// ajax--api--web server
const http = require('http');
const server = http.createServer((req, res) => {
    res.end('hello');
})
server.listen(3000, 'localhost', () => {
    console.log('服务启动成功');
});
