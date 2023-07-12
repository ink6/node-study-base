/**
 * 将 1-文件写入XXXX 2-xxxx的名字前面批量加上0
 */

//导入 fs 模块
const fs = require('fs')

// const publicPath = './code/'
const publicPath = __dirname + '/code/'
//读取 code 文件夹
const list = fs.readdirSync(publicPath)

//遍历数组
list.forEach(oldName => {
  //拆分文件名
  let [ index, name ] = oldName.split('-')

  //判断
  index = index * 1 < 10 ? '0' + index :  index

  //创建新的文件名
  const newName = new_index + '-' + name
  
  //重命名
  fs.renameSync(publicPath + oldName, publicPath + newName)
})