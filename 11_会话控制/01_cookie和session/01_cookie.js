const express = require('express')

const app = express()
const cookieParser = require('cookie-parser')
app.use(cookieParser())
//创建路由规则
app.get('/set-cookie', (req, res) => {
  res.cookie('name','ink.chen')
  // res.cookie('name','ink.chen', { maxAge: 60 * 1000})
  res.cookie('theme','blue')
  res.send('cookie设置成功')
})

//删除 cookie
app.get('/remove-cookie', (req, res) => {
  res.clearCookie('name')
  res.send('cookie删除成功')
})

//获取 cookie
app.get('/get-cookie', (req, res) => {
  console.log('Cookies: ', req.cookies)
  res.send('cookie获取成功, 名称 - ', req.cookies.name)
})

app.listen(3000, () => {
  console.log('服务启动成功');
})