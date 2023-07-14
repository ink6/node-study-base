// 我们可以将自己开发的工具包发布到 npm 服务上，方便自己和其他开发者使用，操作步骤如下：
// 1. 创建文件夹，并创建文件 index.js，在文件中声明函数，使用 module.exports 暴露
// 2. npm 初始化工具包，package.json 填写包的信息 (包的名字是唯一的)
// 3. 注册账号https://www.npmjs.com/signup4. 激活账号（一定要激活账号）
// 5. 修改为官方的官方镜像 (命令行中运行nrm use npm )
// 6. 命令行下npm login填写相关用户信息
// 7. 命令行下npm publish提交包

// 使用自己发布的包
const { add } = require('ink_pub')
console.log(add(1, 6));