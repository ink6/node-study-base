//导入 express
const express = require('express')
//创建应用对象
const app = express()

//创建路由 /:id 通用路径
app.get('/:id.html', (req, res) => {
  console.log(req.path);
  console.log(req.url);
  console.log(req.params);
  //获取 URL 路由参数
  console.log(req.params.id);
  res.setHeader('content-type', 'text/html;charset=utf-8') // text/html这里如果写错 或者不在mime中 则是下载模式
  res.end('商品详情');
})
//监听端口, 启动服务
app.listen(3000, () => {
  console.log('服务启动了~~~');
})