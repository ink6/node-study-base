
/**
 * 观书有感.txt
 * 半亩方塘一鉴开，天光云影共徘徊。
 * 问渠那得清如许？为有源头活水来。
 */

// 引入fs模块
const fs = require('fs')

// 2. 创建写入流对象 
const ws = fs.createWriteStream('./观书有感.txt')

// 3. write 开始写入

ws.write('半亩方塘一鉴开，')
ws.write('天光云影共徘徊。\r\n')
ws.write('问渠那得清如许？')
ws.write('为有源头活水来。\r\n')

// 4. 关闭通道 - 如果不写 当执行完毕后也会自动关闭
// ws.close()
// ws.end()

