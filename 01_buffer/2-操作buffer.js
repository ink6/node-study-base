const buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
// console.log(buf_4.toString()); // utf-8 转成字符串 iloveyou

// []
// const buf = Buffer.from('hello')
// console.log(buf[0]); // 104 十进制
// console.log(buf[0].toString(2)); // 1101000 二进制  这里的toString的转化为二进制的意思

// buf修改
// console.log(buf);
// buf[0] = 95
// console.log(buf);

// 溢出
// const buf = Buffer.from('hello')
// buf[0] = 361 // 超过255 0001 0110 1001 => 0110 1001(十进制105 十六进制69) 舍弃高位的数字 会截取后8位
// console.log(buf); // <Buffer 69 65 6c 6c 6f>

// 中文
const buf = Buffer.from('您')
console.log(buf); // <Buffer e6 82 a8> UTF-8的中文 一个中文三个字节 


