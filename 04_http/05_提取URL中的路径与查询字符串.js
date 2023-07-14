//导入 http 模块
const http = require('http')
//1. 导入 url 模块
const url = require('url')

//创建服务对象
const server = http.createServer((request, response) => {
  // 请求路径为 http://127.0.0.1:9000/search?name=abc
  // console.log(request.url); // /search?name=abc
  //2. 解析 request.url 
  const res = url.parse(request.url, true) // 第二个参数传true表示 解析出来的query是object格式 false的string格式
  // console.log(res);
  //路径
  console.log(res.pathname);
  //查询字符串
  console.log(res.query); // [Object: null prototype] { name: 'abc' } -> [Object: null prototype]表示原型指向null
  response.end('Hello HTTP');

})

//监听端口, 启动服务
server.listen(9000, () => {
  console.log('服务启动成功');
})