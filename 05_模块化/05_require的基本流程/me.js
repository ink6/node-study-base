const test = {
  name: '温蒂'
}
module.exports = test

// console.log(test);
console.log(arguments);
console.log(arguments.callee.toString()); // arguments.callee 属性包含当前正在执行的函数。
// function (exports, require, module, __filename, __dirname) {
//   const test = {
//     name: '温蒂'
//   }
//   module.exports = test
  
//   // console.log(test);
//   console.log(arguments);
//   console.log(arguments.callee.toString());
//   }