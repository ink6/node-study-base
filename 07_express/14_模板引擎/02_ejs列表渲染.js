const ejs = require('ejs')
const fs = require('fs')
const yuanshen = ['温蒂', '甘雨', '迪卢克', '可莉']

// 原生
// let str = '<ul>'
// yuanshen.forEach(item => {
//   str += `<li>${item}</li>`
// })
// str += '</ul>'

// console.log(str);

// ejs
// const str = `
//   <ul>
//     <% yuanshen.forEach(item => {  %>
//       <li><%= item %></li>
//     <% })  %>
//   </ul>
// `
const str = fs.readFileSync('./02_条件渲染.html').toString()
const res = ejs.render(str, { yuanshen})

console.log(res);