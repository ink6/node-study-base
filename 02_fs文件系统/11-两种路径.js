const fs = require('fs')

// 相对路径
fs.writeFileSync('./index.html', 'love')
fs.writeFileSync('../index2.html', 'love')
fs.writeFileSync('index3.html', 'love')

//绝对路径
fs.writeFileSync('/Users/chenhui/Desktop/index.html', 'love')
fs.writeFileSync('/index.html', 'love') // Error: EROFS: read-only file system, open '/index.html'