// 搭建 HTTP 服务，响应一个 4行3 列的表格，并且要求表格有 行换色效果，且 点击 单元格能 高亮显示
const http = require('http')

const server = http.createServer((request, response) => {
  response.setHeader('content-type', 'text/html;charset=utf-8')
    response.write(`
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
          table, td {
            cursor: pointer;
            border: 1px solid #ccc;
          }
          tr:nth-child(odd) {
            background-color: #ccc;
          }
          tr:hover {
            background-color: cyan;
          }
        </style>
      </head>
      <body>
        <table>
          <tr>
            <td>善良呀</td>
            <td>美丽呀</td>
            <td>大方呀</td>
          </tr>
          <tr>
            <td>善良呀</td>
            <td>美丽呀</td>
            <td>大方呀</td>
          </tr>
          <tr>
            <td>善良呀</td>
            <td>美丽呀</td>
            <td>大方呀</td>
          </tr>
          <tr>
            <td>善良呀</td>
            <td>美丽呀</td>
            <td>大方呀</td>
          </tr>
        </table>
      </body>
      </html>`)
    response.end()
})

server.listen(9000, () => {
  console.log('服务启动成功');
})