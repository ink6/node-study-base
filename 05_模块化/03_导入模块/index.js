// 对于自己创建的模块，导入时路径建议写相对路径，且不能省略./和../ fs模块中推荐用绝对路径
const fa = require('./util')
console.log(fa);

// js和json文件导入时可以不用写后缀，c/c++编写的node扩展文件也可以不写后缀，但是一般用不到
const duanzi1 = require('./duanzi') // 如果有json 和js 文件 会优先引入js文件
// const duanzi2 = require('./duanzi.json')// json文件内部不用暴露
console.log(duanzi1);

// 如果导入其他类型的文件（text.abc | text1），会以js文件进行处理
const abc = require('./text.abc')
const abc2 = require('./text1')
abc.textabc()
abc2.textabc()