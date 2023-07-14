//1. 导入 uniq 包
const uniq = require('uniq') // 到node_modules下进行查找

//2. 使用函数
const arr = [1,2,3,4,5,7,6,5,4,3,2,1]
const res = uniq(arr)
console.log(res);