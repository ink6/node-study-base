const express = require('express')

//创建路由对象
const router = express.Router()

router.get('/home', (req, res) => {
  res.send('前台首页')
})
router.get('/search', (req, res) => {
  res.send('搜索页面')
})

module.exports = router