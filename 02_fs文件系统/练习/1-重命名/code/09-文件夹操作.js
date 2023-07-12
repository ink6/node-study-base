const fs = require('fs')

// 创建文件夹 mkdir make directory
fs.mkdir('./html', err=> {
  if(err) {
    console.log('创建文件夹失败', err);
    return
  }
  console.log('创建文件夹成功');
})

// 递归创建
// fs.mkdir('./a/b/c', { recursive: true }, err => { // { recursive: true } 开启递归模式
//   if(err) {
//     console.log('递归创建文件夹失败', err);
//     return
//   }
//   console.log('递归创建文件夹成功');
// })

// 读取文件夹内容 readdir read directory
// fs.readdir('./资料', (err, data) => {
//   if(err) {
//     console.log('读取失败', err);
//   }
//   console.log('读取成功', data); // [ '个性签名.txt', '笑看风云.mp4', '观书有感.txt' ]
// })

// 删除文件夹
// fs.rmdir('./html', err=> {
//   if(err) {
//     console.log('删除失败', err);
//     return
//   }
//   console.log('删除成功');
// })

// 递归删除 - 不推荐 DeprecationWarning: In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed. Use fs.rm(path, { recursive: true }) instead
// fs.rmdir('./a', { recursive: true }, err=> {
//   if(err) {
//     console.log('删除失败', err);
//     return
//   }
//   console.log('删除成功');
// })

// 推荐使用
// fs.rm('./a', { recursive: true }, err => {
//     if(err) {
//     console.log('删除失败', err);
//     return
//   }
//   console.log('删除成功');
// })