/**
 * 需求:
 *   复制『资料』文件夹下的『笑看风云.mp4』
 */

const fs = require('fs')
const process = require('process')

//方式一 readFileSync

//读取文件内容
// const data = fs.readFileSync('./资料/笑看风云.mp4')

// 写入文件
// fs.writeFileSync('./资料/笑看风云-2.mp4', data)
// console.log(process.memoryUsage()); // 获取当前进程占用内存 rss 105418752字节 = 102948KB = 100.53MB

//方式二 流式操作
//创建读取流对象
const rs = fs.createReadStream('./资料/笑看风云.mp4')
// 创建写入流对象
const ws = fs.createWriteStream('./资料/笑看风云-3.mp4')
//绑定 data 事件
// rs.on('data', chunk => {
//   ws.write(chunk)
// })
// 绑定end事件
// rs.on('end', () => {
//   console.log(process.memoryUsage()); // 获取当前进程占用内存 28708864字节 = 28036KM = 27.3MB
// })
const res = rs.pipe(ws) // 简写方式 -  将创建流和读取流通过pipe传递 可以一步实现复制操作
console.log(res);