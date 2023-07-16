//1. 安装 EJS
//2. 导入 EJS
const ejs = require('ejs')
const fs = require('fs')

//声明变量
const china = '中国'

const weather = '今天天气不错'
const content = fs.readFileSync('./01_ejs.html').toString()
console.log(content);

// 使用模板字符串
// console.log(`我爱你 ${china}`);

//使用 ejs 渲染
// const res = ejs.render('我爱你呀 <%= china%>', { china: china })
const res = ejs.render(content, { china: china, weather })
console.log(res);