const express = require('express');
const router = express.Router(); // 属于app的子对象
router.get('/list', (req, res) => {
    res.json({
        list: [{
            id: 001,
            name: '里斯'
        }]
    })
})
module.exports = router;