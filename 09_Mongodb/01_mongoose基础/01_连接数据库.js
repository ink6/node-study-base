//1. 安装 mongoose
//2. 导入 mongoose
const mongoose = require('mongoose')

//设置 strictQuery 为 true
// mongoose.set('strictQuery', true); // 新版本已去除 无需设置

//3. 连接 mongodb 服务           ink - 数据库的名称
mongoose.connect('mongodb://127.0.0.1:27017/ink')

//4. 设置回调
// 设置连接成功的回调  once 一次   事件回调函数只执行一次
mongoose.connection.once('open', () => {
// mongoose.connection.on('open', () => {
  console.log('连接成功');
  // app.listen(8080); 建议使用once代替on 因为当数据库断链再自动重连的过程中 使用on会一直调用 而on里面如果有listen的操作 则会一直监听 非常不好
})
// 设置连接错误的回调
mongoose.connection.on('error', () => {
  console.log('连接失败');
})
//设置连接关闭的回调
mongoose.connection.on('close', () => {
  console.log('连接关闭');
})
//关闭 mongodb 的连接
// setTimeout(() => {
//   mongoose.disconnect()
// }, 2000)