const express = require('express');
const App = express();
// 注册路由
const memberRouter = require('./member.router');
const skuRouter = require('./sku.router');

App.use('/member',memberRouter); // 路由本身属于中间件
App.use('/sku', skuRouter); // 路由本身属于中间件
App.listen(3000, 'localhost', () => {
    console.log('服务器启动成功');
})