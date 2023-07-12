const fs = require('fs')

// stat status 查看资源状态
fs.stat('./资料/笑看风云.mp4', (err, data) => {
  if(err) {
    console.log('查看文件信息失败');
  }
  // console.log(data); // size: 大小 atime(access time)-访问时间 mtime(modify time)-修改时间 ctime-最后一次修改文件状态的时间 birthtime-文件创建时间
  console.log(data.isFile()); // isFile()是否是文件
  console.log(data.isDirectory()); // isDirectory()是否是文件夹
})