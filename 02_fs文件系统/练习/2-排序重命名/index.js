/**
 * 任意删除一个文件 使文件序号连续
 */

const fs = require('fs')

const fileList = fs.readdirSync('./code')
console.log(fileList);

fileList.forEach((oldName, index) => {
  //拆分文件名
  const name = oldName.split('-')[1]

  //index 自增 索引从0开始
  index ++
  //判断
  index = index < 10 ? '0' + index :  index
  const newName = index + '-' + name
  console.log(newName);
  fs.renameSync(`./code/${oldName}`, `./code/${newName}`)
})