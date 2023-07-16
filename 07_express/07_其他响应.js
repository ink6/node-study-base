//导入 express
const express = require('express')
const path = require('path')
//创建应用对象
const app = express()

//创建路由
app.get("/other", (req, res) => {
  // JSON 响应
  // res.json({
  //   title: '我是个美女'
  // })
  //响应文件内容
  // res.sendFile(path.resolve(__dirname, './02_form.html'))
  //下载响应
  // res.download(path.resolve(__dirname, './05_singers.json'))
  //跳转响应
  res.redirect('http://www.baidu.com')
})

//监听端口, 启动服务
app.listen(3000, () => {
  console.log('express启动中');
})