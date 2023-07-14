// 1. 在当前文件夹下 node_modules 中寻找同名的文件夹
// 2. 使用这种方式 uniq = require('uniq') 在当前目录找不到 会在上级目录中下的 node_modules 中寻找同名的文件夹，直至找到磁盘根目录

//1. 导入 uniq 包
const uniq = require('uniq') // 到node_modules下进行查找 找到该文件夹名后再去看这个文件夹下的package.json文件中的main属性指向的文件
// const uniq = require('./node_modules/uniq')
// const uniq = require('./node_modules/uniq/uniq')

//2. 使用函数
const arr = [1,2,3,4,5,7,6,5,4,3,2,1]
const res = uniq(arr)
console.log(res);