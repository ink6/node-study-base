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
  
  //7. 设置字段 - 查询所有数据 并只返回数据的name 和author 
  //0:不要的字段 1:要的字段
  BookModel.find().select({ name: 1, author: 1, _id: 0 }).exec() // _id是默认返回 0不返回
  .then(res => {
    console.log(res);
  })

  //数据排序 
  // 查询所有数据 返回数据的name/author/price 并降序
  // sort 排序 1:升序 -1:倒序
  // BookModel.find().select({ name: 1, author: 1, price: 1, _id: 0}).sort({price: -1}).exec()
  // .then(res => {
  //   console.log(res);
  // })

  //数据的截取 
  // 查询所有数据 返回数据的name/author/price 降序返回前三个 
  // BookModel.find().select({ name: 1, author: 1, price: 1, _id: 0}).sort({ price: -1}).limit(3).exec()
  // .then(res => {
  //   console.log(res);
  // })

  //数据的截取 
  // 查询所有数据 返回数据的name/author/price 降序 跳过前三个后再返回三个  - 分页查询
  // BookModel.find().select({ name: 1, author: 1, price: 1, _id: 0}).sort({ price: -1}).skip(3).limit(3).exec()
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









