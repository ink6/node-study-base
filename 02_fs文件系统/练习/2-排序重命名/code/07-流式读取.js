//1. 引入 fs 模块
const fs = require('fs')

//2. 创建读取流对象
const rs = fs.createReadStream('./资料/笑看风云.mp4')

//3. 绑定 data 事件 获取读取的数据   chunk 块儿  大块儿
rs.on('data', chunk => {
  console.log(chunk);
  console.log(chunk.length); // 65536 分段读取出来的值是 65536字节 表示64KB
  // console.log(chunk.toString()); // 读取出来是乱码
})

//4.读取完毕后, 执行end回调  可选事件
rs.on('end', () => {
  console.log('读取完成~~');
})