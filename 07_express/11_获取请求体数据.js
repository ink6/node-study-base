/**
 * 按照要求搭建 HTTP 服务
 * GET   /login  显示表单网页
 * POST  /login  获取表单中的『用户名』和『密码』
 */
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

//创建应用对象
const app = express()

//解析 JSON 格式的请求体的中间件
// const jsonParser = bodyParser.json()
//解析 querystring 格式请求体的中间件
const urlencodedParser = bodyParser.urlencoded({ extended: false }) // extended 使用querystring库（当false时）或qs库（当true时）

app.get('/login', (req, res) => {
  //响应 HTML 文件内容
  res.sendFile(path.resolve(__dirname, './11_form.html'))
})

app.post('/login', urlencodedParser, (req, res) => {
  console.log(req.body);
  const { username, password }= req.body
  res.send(`提交的用户信息是： ${username} - ${password}`)
})
app.listen(9000, () => {
  console.log('服务启动~~~');
})