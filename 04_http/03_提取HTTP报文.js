//1. 导入 http 模块
const http = require('http')

//2. 创建服务对象
const server = http.createServer((req, res) => {
  //获取请求的方法
  console.log(req.method);
  //获取请求的 url
  console.log(req.url);// 只包含 url 中的路径与查询字符串
  //获取 HTTP 协议的版本号
  console.log(req.httpVersion);
  //获取 HTTP 的请求头
  console.log(req.headers);
  res.end('hhhhh')
})

//3. 监听端口, 启动服务
server.listen(9000, () => {
  console.log('启动成功');
})