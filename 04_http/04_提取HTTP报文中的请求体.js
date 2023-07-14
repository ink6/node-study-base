//1. 导入 http 模块
const http = require('http')

//2. 创建服务对象
const server = http.createServer((req, res) => {
  //1. 声明一个变量
  let body = ''
  //2. 绑定 data 事件
  req.on('data', chunk => {
    // console.log(chunk); // <Buffer 75 73 65 72 6e 61 6d 65 3d 61 61 61 26 70 61 73 73 77 6f 72 64 3d 31 31 31>
    // console.log(chunk.toString()); // username=aaa&password=111
    body += chunk
  }) 
  //3. 绑定 end 事件
  req.on('end', () => {
    console.log('body---', req.url, body);
    //响应
    res.end('Hello HTTP');
  })
})

//3. 监听端口, 启动服务
server.listen(9000, () => {
  console.log('服务启动成功');
})