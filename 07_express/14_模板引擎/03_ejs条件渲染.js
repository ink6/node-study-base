/**
 * 通过 isLogin 决定最终的输出内容
 * true   输出『<span>欢迎回来</span>』
 * false  输出『<button>登录</button>  <button>注册</button>』
 */
const ejs = require('ejs')
const fs = require('fs')

const isLogin = true

//原生 JS
// if(isLogin){
//   console.log('<span>欢迎回来</span>')
// }else{
//   console.log('<button>登录</button>  <button>注册</button>');
// }

//EJS 实现
// const res = ejs.render(`
//   <% if(isLogin) { %>
//     <span>欢迎回来</span>
//   <% } else { %>
//     <button>登录</button>  <button>注册</button>
//   <% }  %>
// `, { isLogin })
//读取 HTML 内容
const str = fs.readFileSync('./03_条件渲染.html').toString()
const res = ejs.render(str, { isLogin })
console.log(res);