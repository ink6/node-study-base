const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.resolve(__dirname, './10_尚品汇')))

app.all('*', (req, res) => {
  res.send('静态资源访问')
})
app.listen(9000, () => {
  console.log('服务启动成功');
})