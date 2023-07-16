/**
 * 针对 /admin  /setting 的请求, 要求 URL 携带 code=521 参数, 如未携带提示『暗号错误』  
 */

const app = require('express')()

// 我写的
// function routerMiddleWare (req, res, next) {
//   const permissionRoutes = ['/admin', '/setting']
//   const { query, path } = req
//   console.log(permissionRoutes.includes(path) , query.code * 1 !== 521);
//   if (permissionRoutes.includes(path) && query.code * 1 !== 521) {
//     res.send('暗号错误')
//   } else {
//     next()
//   }
//   console.log(query, path);
// }
function routerMiddleWare (req, res, next) {
  const { query, path } = req
  if (query.code * 1 !== 521) {
    res.send('暗号错误')
  } else {
    next()
  }
  console.log(query, path);
}
app.get('/admin', routerMiddleWare, (req, res) => {
  res.send('admin')
})
app.get('/setting', routerMiddleWare, (req, res) => {
  res.send('setting')
})
app.all('*', (req, res) => {
  res.send('404 Not Found')
})
app.listen(3000, () => {
  console.log('服务启动了，，');
})