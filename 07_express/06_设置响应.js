//导入 express
const express = require('express')

//创建应用对象
const app = express()

//创建路由
app.get("/response", (req, res) => {
  //原生响应
  // res.statusCode = 404
  // res.statusMessage = 'love'
  // res.setHeader('aaa', 'bbb')
  // res.write('this is origin body - ')

  //express 响应
  // res.status(404)
  // res.set('eee', 'fff')
  // res.send('您好啊 我是中文') // 使用send 会自动进行utf-8编码

  // 链式操作
  res.status(200).set('Access-Control-Allow-Origin', "*").send('您好啊 我是链式调用')
  res.end('hello express')
})

//监听端口, 启动服务
app.listen(3000, () => {
  console.log('express启动中');
})