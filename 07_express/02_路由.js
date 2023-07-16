const app = require('express')()

app.get('/home', (req, res) => {
  console.log(req);
  res.end('这是home')
})

app.get('/', (req, res) => {
  res.end('这是index')
})

app.post('/login', (req, res) => {
  res.end('这是login')
})

app.all('/test', (req, res) => {
  res.end('这是test')
})
app.all('*', (req, res) => {
  res.end('这是任意匹配')
})

app.listen(3000, () => {
  console.log('启动成功');
})