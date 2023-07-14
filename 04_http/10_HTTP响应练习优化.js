// 搭建 HTTP 服务，响应一个 4行3 列的表格，并且要求表格有 行换色效果，且 点击 单元格能 高亮显示

const fs = require('fs')
const http = require('http')
const path = require('path')
const server = http.createServer((request, response) => {
  //读取文件内容
  fs.readFile(path.resolve(__dirname, '10_table.html'), (err, data) => {
    // console.log(err, data);
    if (err) {
      console.log('读取文件出错 -', err);
    }
    response.setHeader('content-type', 'text/html;charset=utf-8')
    response.write(data)
    response.end()
  })
})

server.listen(9000, () => {
  console.log('服务启动成功');
})