const fs = require('fs')
const path = require('path')

//写入文件 
fs.writeFileSync(__dirname + '/index.html', 'love');
// console.log(__dirname + '/index.html'); // 这种拼接的写法不规范

// path.resolve 拼接规范的绝对路径
console.log(path.resolve(__dirname, './index.html')); // /Users/chenhui/MyBook/Study/Node/03_path模块/index.html
console.log(path.resolve(__dirname, 'index.html')); // /Users/chenhui/MyBook/Study/Node/03_path模块/index.html
console.log(path.resolve(__dirname, '/index.html')); // /index.html
console.log(path.resolve(__dirname, '/index', './text.html')); // /index/text.html 拼接作业

// 获取操作系统的路径分隔符 windows是\ ,MacOS和Linux是/
console.log(path.sep);

// 获取文件的绝对路径
const _str = __filename
console.log(_str); // /Users/chenhui/MyBook/Study/Node/03_path模块/path.js

//解析路径并返回对象
console.log(path.parse(_str));
// {
//   root: '/',
//   dir: '/Users/chenhui/MyBook/Study/Node/03_path模块',
//   base: 'path.js',
//   ext: '.js',
//   name: 'path'
// }

// 获取路径的基础名称
console.log(path.basename(_str)); // path.js

// 获得路径的扩展名
console.log(path.extname(_str)); // .js

// 获取路径的目录名
console.log(path.dirname(_str)); // /Users/chenhui/MyBook/Study/Node/03_path模块