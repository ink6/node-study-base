const express = require('express')

//创建路由对象
const router = express.Router()

router.get('/admin', (req, res) => {
  res.send('后台首页')
})
router.get('/setting', (req, res) => {
  res.send('后台设置')
})

module.exports = router