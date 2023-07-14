//声明一个函数
function tiemo() {
  console.log('我是贴膜工厂方法');
}
//声明一个函数
function niejiao() {
  console.log('我是捏脚工厂方法');
}

// module.exports 暴露数据
// module.exports = {
//   tiemo,
//   niejiao
// }

// exports 暴露数据
// exports.tiemo = tiemo
// exports.niejiao = niejiao


// 1. module.exports 可以暴露`任意`数据
// module.exports = 666
// module.exports = '痛苦'

// 2. 不能使用 `exports = value`的形式暴露数据
// exports = tiemo 不可以这样写 exports本质是一个空对象 我们需要修改这个对象的属性而不是把这个对象直接改掉
// exports = module.exports = {}
// console.log('--', module.exports);
// console.log('---',exports);
// console.log(module.exports === exports);
module.exports = exports = {
  tiemo,
  niejiao
}