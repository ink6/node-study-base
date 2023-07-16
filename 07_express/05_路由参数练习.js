/**
 * 地址栏输入 singer/1.html
 * 获取该信息展示在页面上
 */

//导入 express 并 创建应用对象
const app = require('express')()
//导入 json 文件
const { singers } = require('./05_singers.json')
//创建路由
app.get('/singer/:id.html', (req, res) => {
  //获取路由参数
  const { id } = req.params
  // console.log(id);
  const singer = singers.find(sin => sin.id === id * 1)
  console.log(singer);
  //判断
  if(!singer){
    res.statusCode = 404;
    res.end(`<h1>404 Not Found</h1>`)
    return;
  }
  res.setHeader('content-type', 'text/html;charset=utf-8')
  const con = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h2>${singer.singer_name} - ${singer.other_name}</h2>
      <img src="${singer.singer_pic}" alt="">
    </body>
    </html>`
  res.end(con)
})

app.listen(8888, () => {
  console.log('服务已经启动， 可以找寻歌手，，，');
})