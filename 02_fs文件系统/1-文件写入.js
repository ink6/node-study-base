
/**
 * 需求:
 * 新建一个文件, 座右铭.txt,  写入内容 - "无限自由中偏爱的一种约束，"
 */

//1. 导入 fs 模块
const fs = require('fs')

//2. 异步写入文件
fs.writeFile('座右铭.txt', '无限自由中偏爱的一种约束，', err => {
  if (err) {  // 写入失败: err为错误对象 写入成功：err为null
    console.log('写入失败');
  }
  console.log('写入成功');
})
console.log('这是在异步代码之后的代码 会先打印出来');
//2. 同步写入文件
// fs.writeFileSync('座右铭Sync.txt', '无限自由中偏爱的一种约束，')
