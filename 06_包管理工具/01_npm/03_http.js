// 执行安装选项-g进行全局安装 npm i -g nodemon
// 可以通过 npm root -g可以查看全局安装包的位置 -> /usr/local/lib/node_modules
// mac 进入目标位置: 打开访达后 使用快捷键： alt + shift + G

const http = require('http')

const server = http.createServer((request, response) => {
  response.setHeader('content-type', 'text/html;charset=utf-8')
  response.end('Hello 使用nodemon热更新')
})

server.listen(9000, () => {
  console.log('启动啦');
})