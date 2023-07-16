const express = require('express')
const path = require('path')
const app = express()

// 注意事项:
// 1. index.html 文件为默认打开的资源
// 2. 如果静态资源与路由规则同时匹配，谁先匹配(谁的代码在上面)谁就响应
// 3. 路由响应动态资源，静态资源中间件响应静态资源

// 输入 http://127.0.0.1:9000/ 出现的是./public/index的内容 - 代码顺序决定
// app.use(express.static(path.resolve(__dirname, './public')))
// app.get('/', (req, res) => {
//   res.send('我才是真的首页')
// })

// 输入 http://127.0.0.1:9000/ 出现的是我才是真的首页 - 代码顺序决定
app.get('/', (req, res) => {
  res.send('我才是真的首页')
})
app.use(express.static(path.resolve(__dirname, './public')))

app.all('*', (req, res) => {
  res.send('静态资源')
})

app.listen(9000, () => {
  console.log('服务启动成功');
})
