const express = require('express');
const router = express.Router(); // 属于app的子对象
router.get('/list', (req, res) => {
    res.json({
        list: [{
            id: 123,
            name: '鞋子',
            price: 100
        }]
    })
})
module.exports = router;