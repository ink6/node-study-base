/**
 * 记录每个请求的 url 与 IP 地址
 */
//导入 express + 创建应用对象
const app = require('express')()
const homeRouter = require('./routes/homeRouter')
const adminRouter = require('./routes/adminRouter')
app.use(homeRouter).use(adminRouter)

app.all('*', (req, res) => {
  res.send('404 Not Found')
})

app.listen(3000, () => {
  console.log('3000端口已启动。。。');
})