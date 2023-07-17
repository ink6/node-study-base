//1. 安装 mongoose
//2. 导入 mongoose
const mongoose = require('mongoose')
//3. 连接 mongodb 服务                        数据库的名称
mongoose.connect('mongodb://127.0.0.1:27017/ink')
//4. 设置回调
// 设置连接成功的回调  once 一次   事件回调函数只执行一次
mongoose.connection.once('open', () => {
  //5. 创建文档的结构对象
  //设置集合中文档的属性以及属性值的类型
  const BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    is_hot: Boolean
  })
  //6. 创建模型对象  对文档操作的封装对象    mongoose 会使用集合名称的复数, 创建集合
  let BookModel = mongoose.model('novel', BookSchema)
  //7. 查找文档 查找一条
  // BookModel.findOne({"name" : "大魏能臣"})
  // .then(res => {
  //   console.log(res);
  // })

  //根据 ID 获取文档
  // BookModel.findById('64b4d3d61fa372f94937bd8d')
  // .then(res => {
  //   console.log(res);
  // })

  //批量获取
  BookModel.find({"author" : "余华"})
  .then(res => {
    console.log(res);
  })

  //读取所有
  // BookModel.find()
  // .then(res => {
  //   console.log(res);
  // })
})

mongoose.connection.on('error', () => {
  console.log('操作失败');
})
mongoose.connection.on('close', () => {
  console.log('链接关闭');
})