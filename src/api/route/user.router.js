const express = require('express');
const router = express.Router();

// 1. 第一个场景
router.use(function(req, res, next){
    console.log('路由使用中间件', req.path);
    next();
})

function valid_login_params(req, res, next) {
    let {name, password} = req.query;
    if(!name || !password) {
        res.json({
            message: '参数校验失败'
        })
    } else {
        req.formdata = {
            name,
            password
        }
        next();
    }
}

// 2. 路由内部使用

router.get('/demo', [valid_login_params], (req, res) => {
    res.json({
        message: req.formdata,
        params: req.params
    })
})

module.exports = router