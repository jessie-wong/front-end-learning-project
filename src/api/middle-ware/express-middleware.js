const express = require('express');
// express实例
const app = express();
// 中间件完整的结构——可插拔的功能
// 1. 是一个函数
// 2. err、req、res、next——>function

function demo_middleware(err, req, res, next) {
    // 1. 异常处理
    // 2. 处理业务功能，转交控制权——next
    // 3. 相应请求——结束响应——>当作路由的处理函数

}

/**
 * 异常捕获
 *  
 */ 
app.get('/demo', (req, res) => {
    throw new Error('异常捕获处理')
})

function error_handler_middleerror(error, req, res, next) {
    if (error) {
        let { message } = error;
        res.status(500).json({
            message: '服务器异常-' + message
        })
    } else {
        //
    }
}

function not_found_handler(req, res, next) {
    res.json({
        message: 'api不存在'
    })
}

// 异常捕获放到最后面
app.use(error_handler_middleerror);
app.use(not_found_handler);

function demo_middleware(req, res, next) {
    try {
        // mysql操作
    } catch (error) {
        next(error)
    }
    // Promise.then().catch(next);
}

// tips：异常处理一定是 收口的（尽可能放在同一个地方）


/**
 * 路由级别
 * 
 */
function log_middleware(req, res, next) {
    console.log('请求来了');
    next();ß
}
userRouter = require('../route/user.router');
// app.use('/user', userRouter);



/**
 * app级别
 * 
 */

// app.use(log_middleware);

// 加载一个 static 的中间件——内置中间件
// 相对于启动路径——package.json
app.use(express.static('src/api/middle-ware/static', {
    extensions: ['html', 'htm']
}))

// app级别的使用
// router 级别
// 异常处理--》属于app级别--》route级别
function valid_name_middleware(req, res, next) {
    let { name } = req.query;
    if (!name || !name.length) {
        res.json({
            message: '缺少name参数'
        });
    } else {
        next();
    }
}

// app.all('*', valid_name_middleware);
app.get('/middleware', (req, res) => {
    res.json({
        message: 'ok',
        params: req.query
    });
})

app.listen(3000, 'localhost', () => {
    console.log('服务启动成功')
})