const express = require('express')
const path = require('path')
const app = express()

// 自己写一个全局中间件 - 防盗链
app.use((req, res, next) => {
  const referer = req.get('referer')
  if (referer) {
    const { hostname } = new URL(referer)
    // console.log(hostname, '---');
    if (hostname !== '127.0.0.1') {
      res.status(404).send('<h1>404 Not Found 不要偷取我的图片哦</h1>') // ??????????为什么这里从来不生效？？
      return
    }
  }
  next()
})
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './public/index.html'))
// })
// app.get('/image/logo.png', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './public/image/logo.png'))
// })
app.use(express.static(path.resolve(__dirname, './public')))

app.listen(9000, () => {
  console.log('服务启动~~~');
})