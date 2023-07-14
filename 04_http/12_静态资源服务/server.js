// 创建一个 HTTP 服务，端口为 9000，满足如下需求
// GET /index.html       响应 page/index.html 的文件内容响应
// GET /css/app.css      响应 page/css/app.css 的文件内容
// GET /images/logo.png  响应 page/images/logo.png 的文件内容

const fs = require('fs')
const http = require('http')
const path = require('path')
//声明一个变量
let mimes = {
  html: 'text/html',
  css: 'text/css',
  js: 'text/javascript',
  png: 'image/png',
  jpg: 'image/jpeg',
  gif: 'image/gif',
  mp4: 'video/mp4',
  mp3: 'audio/mpeg',
  json: 'application/json'
}
const server = http.createServer((request, response) => {
  if(request.method !== 'GET'){
    response.statusCode = 405;
    response.end('<h1>405 Method Not Allowed</h1>');
    return;
  }
  //获取请求url的路径
  const { pathname } = new URL(request.url, 'http://127.0.0.1:9000')
  //拼接文件路径
  const filePath = path.resolve(__dirname, `page/${ pathname }`)
  //读取文件 fs 异步 API
  fs.readFile(filePath, (err, data) => {
    if(err){
      console.log(err);
      //设置字符集
      response.setHeader('content-type','text/html;charset=utf-8');
      //判断错误的代号
      switch(err.code){
        case 'ENOENT':
          response.statusCode = 404;
          response.end('<h1>404 Not Found</h1>');
        case 'EPERM':
          response.statusCode = 403;
          response.end('<h1>403 Forbidden</h1>');
        default:
          response.statusCode = 500;
          response.end('<h1>Internal Server Error</h1>');
      }
      
      return;
    }
    //获取文件的后缀名
    const ext = path.extname(filePath).slice(1)
    //获取对应的类型
    const type = mimes[ext]
    if (type) { //匹配到了
      if (ext === 'html') { // text/html;charset=utf-8
        response.setHeader('content-type', type + ';charset=utf-8') // html不会乱码 因为设置了 <meta charset="UTF-8"> setHeader的优先级更高
      } else { // html以外的文件不需要加字符集 即使有乱码在渲染到html里面时 也会以html的字符集为标准
        response.setHeader('content-type', type)
      }
    } else { //没有匹配到
      response.setHeader('content-type', 'application/octet-stream')
    }
    // console.log(ext);
    //响应文件内容
    response.end(data)
  })

  // if (pathname === '/index.html') {
  //   const data = fs.readFileSync(path.resolve(__dirname, 'page/index.html'))
  //   response.end(data)
  // }else if (pathname === '/images/1ogo.png') {
  //   const imgs = fs.readFileSync(path.resolve(__dirname, 'page/images/logo.png'))
  //   response.end(imgs)
  // } else if (pathname === '/css/app.css') {
  //   const css = fs.readFileSync(path.resolve(__dirname, 'page/css/app.css'))
  //   response.end(css)
  // } else {
  //   response.statusCode = 404
  //   response.end('404 Not Found')
  // }
})

server.listen(9000, () => {
  console.log('服务启动成功');
})