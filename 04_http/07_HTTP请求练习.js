//1. 导入 http 模块
const http = require('http')

//2. 创建服务对象
const server = http.createServer((request, response) => {
  //获取请求的方法和路径
  const { url, method } = request
  //获取请求的 url 路径
  const { pathname } = new URL(url, 'http://127.0.0.1:9000')
  response.setHeader('content-type', 'text/html;charset=utf-8')
  if (pathname === '/login' && method == 'GET') { //登录
    response.end('登录页面')
  } else if (pathname === '/register' && method == 'GET') {// 注册
    response.end('注册页面')
  } else {
    response.end('Not Found')
  }
})

//3. 监听端口 启动服务
server.listen(9000, () => {
  console.log('启动成功');
})