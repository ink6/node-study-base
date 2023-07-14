// 如果导入的路径是个文件夹，则会首先检测该文件夹下package.json文件中main属性对应的文件，
// 如果存在则导入，反之如果文件不存在会报错。
// 如果 main 属性不存在，或者 package.json 不存在，
// 则会尝试导入文件夹下的index.js和index.json，如果还是没找到，就会报错
const con = require('./modules')
console.log(con);