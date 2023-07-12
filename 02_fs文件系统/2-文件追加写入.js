
/**
 * 需求:
 * 追加写入一个内容到座右铭.txt,  追加内容 - "就是梦想"
 */

//1. 引入 fs 模块
const fs = require('fs')

//2. 调用 appendFile
// fs.appendFile('./座右铭.txt', '就是梦想\r\n', err => {
//   if (err) {
//     console.log('追加写入失败');
//   }
//   console.log('追加写入成功');
// })

// 2. 同步写入
// fs.appendFileSync('./座右铭.txt', '就是梦想\r\n')

//2. writeFile 实现追加写入
fs.writeFile('./座右铭.txt', '就是梦想。\r\n', {
  flag: 'a' // a是追加 w是写入 r的读取 默认是w
}, err => {
  if (err) {
    console.log('追加写入失败');
  }
  console.log('追加写入成功');
})