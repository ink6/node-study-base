/**
 * 记录每个请求的 url 与 IP 地址
 */
//导入 express + 创建应用对象
const app = require('express')()
const fs = require('fs')
const path = require('path')
//声明中间件函数
function recordMiddleware (req, res, next) {
  //获取 url 和 ip
  const { ip, url } = req
  //将信息保存在文件中 08_access.log
  fs.appendFileSync(path.resolve(__dirname, './08_access.log'), `${ip} - ${url}\r\n`)
  //调用 next 执行下一步操作
  next()
}
//使用中间件函数
app.use(recordMiddleware)
app.get('/home', (req, res) => {
  res.send('前台首页')
})

app.get('/admin', (req, res) => {
  res.send('后台首页')
})

app.all('*', (req, res) => {
  res.send('404 Not Found')
})

app.listen(3000, () => {
  console.log('3000端口已启动。。。');
})