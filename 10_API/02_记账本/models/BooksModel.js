// 导入 mongoose
const mongoose = require('mongoose')
//创建文档的结构对象 - 设置集合中文档的属性以及属性值的类型
const BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: Number,
  is_hot: Boolean
})
//6. 创建模型对象  对文档操作的封装对象    mongoose 会使用集合名称的复数, 创建集合
module.exports = mongoose.model('novel', BookSchema)