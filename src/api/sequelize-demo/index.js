const express = require('express');
const app = express();
const memberRouter = require('../route/member.router');

const models = require('../../../models'); //模型对象
// models。User
// models.Sequelize
app.get('/create', async (req, res) => {
    let {name} = req.query;
    // promise返回, user——具备sequelize特性的对象
    let user = await models.User.create({
        name
    });
    console.log(user);
    res.json({
        message: 'success',
        user
    })
})

app.get('/list', async (req, res) => {
    let list = await models.User.findAll();
    res.json({
        message: 'success',
        list
    })
})

app.get('/detail/:id', async(req, res) => {
    let {id} = req.params;
    let result = await models.User.findOne({
        where: {
            id
        }
    });
    res.json({
        message: 'success',
        result
    })
})

app.use('./member', memberRouter);

app.listen(3000, 'localhost', (req, res) => {
    console.log('服务器成功启动');
})