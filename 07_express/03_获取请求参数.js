//导入 express
const express = require('express')

//创建应用对象
const app = express()

//创建路由
app.get('/request', (req, res) => {
  //原生操作
  console.log(req.url);
  console.log(req.method);
  console.log(req.httpVersion);
  //express 操作
  console.log(req.query);
  console.log(req.path);
  //获取 ip 
  console.log(req.ip);

  console.log(req.headers);
  console.log(req.get('host') === req.headers.host);
  res.end('hello params')
})

//监听端口, 启动服务
app.listen(3000, () => {
  console.log('服务已经启动');
})