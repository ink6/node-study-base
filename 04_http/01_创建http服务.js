//1. 导入 http 模块
const http = require('http')

//2. 创建服务对象
const server = http.createServer((request, response) => {
  console.log(response);
  response.setHeader('content-type', 'text/html;charset=utf-8');
  response.end('Hello, 中文的Node') // 设置响应体 中文 乱码需要转义
  // response.end('Hello, Node') // 设置响应体
})

//3. 监听端口 并 启动服务
server.listen(9000, () => {
  console.log('服务启动成功！');
})