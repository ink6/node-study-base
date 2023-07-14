/**
 * 伪代码
 */

const path = require('path')
const fs = require('fs')
// 模拟require的流程
function requireSelf (path) {
  // 1. 将相对路径转为绝对路径，定位目标文件
  const absolutePath = path.resolve(__dirname, path)
  // 2. 缓存检测
  if (cache[absolutePath]) {
    return cache[absolutePath]
  }
  //3. 读取文件的代码
  const code = fs.readFileSync(absolutePath)
  //4. 包裹为一个函数 然后执行
  let module = {}
  let exports = module.exports = {}
  (
    code
    // function (exports, require, module, __filename, __dirname) {
    //   const test = {
    //     name: '温蒂'
    //   }
    //   module.exports = test
    // }
  )(exports, require, module, __filename, __dirname)
  //5. 缓存结果
  cache[absolutePath] = module.exports
  //6. 返回 module.exports 的值
  return module.exports;
}

const m = requireSelf('./me')