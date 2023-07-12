// 1. 引入 fs 模块
const fs = require('fs')

// 2. 异步读取
// fs.readFile('./观书有感.txt', (err, data) => {
//   if (err) {
//     console.log('读取失败');
//     return
//   }
//   console.log('读取成功， 数据是', data, '转为字符串后：', data.toString());
// })

// 3.同步读取
const dataSync = fs.readFileSync('./观书有感.txt')
console.log(dataSync, dataSync.toString());