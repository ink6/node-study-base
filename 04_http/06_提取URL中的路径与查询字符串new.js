//导入 http 模块
const http = require('http')

//创建服务对象
const server = http.createServer((request, response) => {
  // 请求路径为 http://127.0.0.1:9000/search?name=abc
  
  //实例化 URL 的对象  new URL可以接受一个参数 也可以接受两个参数
  // const url = new URL('http://127.0.0.1:9000/search?name=abc')
  const url = new URL(request.url, 'http://127.0.0.1:9000/')
  console.log(url);
  //输出路径
  console.log(url.pathname);
  //输出 name 查询字符串
  console.log(url.searchParams.get('name'));
  response.end('Hello HTTP');

})
//监听端口, 启动服务
server.listen(9000, () => {
  console.log('服务启动成功');
})