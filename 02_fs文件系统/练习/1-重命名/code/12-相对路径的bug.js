const fs = require('fs')

// 相对路径参照物: 命令行的工作目录
// 相对路径会由于本身所在的命令行不同导致创建出来的文件位置不同
// fs.writeFileSync('./index.html', 'love')

//绝对路径 '全局变量' 保存的是: 所在文件的所在目录的绝对路径
console.log(__dirname); // /Users/chenhui/MyBook/Study/Node/02-fs文件系统 无论在什么位置允许 输出的结果都是这个 这样就避免了在不同的位置运行结果不一致的情况
fs.writeFileSync(__dirname + '/index.html', 'love')
