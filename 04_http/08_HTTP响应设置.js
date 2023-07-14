//导入 http 模块
const http = require('http')

//创建服务对象
const server = http.createServer((request, response) => {

  //1. 设置响应状态码
  response.statusCode = 200
  //2. 响应状态的描述 
  response.statusMessage = 'hhhh'
  //3. 响应头
  response.setHeader('content-type', 'text/html;charset=utf-8')
  response.setHeader('Server', 'Study Node') // 设置响应的服务名称
  response.setHeader('Access-Control-Allow-Origin', "*")

  //4. 响应体的设置 - 方式1
  response.write('l')
  response.write('o')
  response.write('v')
  response.write('e')
  //4.响应体的设置 - 方式2 end只能有一个且必须有一个
  response.end('response')
})

server.listen(9000, () => {
  console.log('启动成功');
})