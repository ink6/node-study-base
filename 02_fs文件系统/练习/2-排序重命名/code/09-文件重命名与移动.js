// 1. 引入 fs 模块
const fs = require('fs')

// 文件重命名 - 异步
// fs.rename('./座右铭.txt', './个性签名.txt', err => {
//   if (err) {
//     console.log('文件重命名失败');
//     return
//   }
//   console.log('文件重命名成功');
// })

// 文件移动 - 异步
// fs.rename('./观书有感.txt', './资料/观书有感.txt', err => {
//   if (err) {
//     console.log('文件移动失败');
//     return
//   }
//   console.log('文件移动成功');
// })

// 文件重命名 - 同步
fs.renameSync('./个性签名1.txt','./个性签名.txt')