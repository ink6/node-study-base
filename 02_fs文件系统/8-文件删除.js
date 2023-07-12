// 引入 fs 模块
const fs = require('fs')

// 调用 unlink 方法 - 异步
fs.unlink('./资料/笑看风云-2.mp4', err => {
  if(err) {
    console.log('删除失败！');
    return
  }
  console.log('删除成功~~');
})

// 同步
// fs.unlinkSync('./资料/笑看风云-3.mp4')

// 调用 rm 方法  node-14.4
fs.rm('./资料/笑看风云-4.mp4', err => {
  if(err) {
    console.log('删除失败！');
    return
  }
  console.log('删除成功~~');
})

// 同步
fs.rmSync('./个性签名.txt')
