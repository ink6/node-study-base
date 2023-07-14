// 搭建 HTTP 服务，响应一个 4行3 列的表格，并且要求表格有 行换色效果，且 点击 单元格能 高亮显示

const fs = require('fs')
const http = require('http')
const path = require('path')
const server = http.createServer((request, response) => {
  // response.setHeader('content-type', 'text/html;charset=utf-8')
  const { pathname } = new URL(request.url, 'http://127.0.0.1:9000')
  if (pathname === '/') {
    const data = fs.readFileSync(path.resolve(__dirname, 'table.html'))
    response.end(data)
  }else if (pathname === '/index.js') {
    const js = fs.readFileSync(path.resolve(__dirname, 'index.js'))
    response.end(js)
  } else if (pathname === '/index.css') {
    const css = fs.readFileSync(path.resolve(__dirname, 'index.css'))
    response.end(css)
  } else {
    response.statusCode = 404
    response.end('404 Not Found')
  }
})

server.listen(9000, () => {
  console.log('服务启动成功');
})