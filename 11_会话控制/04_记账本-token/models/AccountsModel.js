//导入 mongoose
const mongoose = require('mongoose')
//创建文档的结构对象
//设置集合中文档的属性以及属性值的类型
const AccountsSchema = new mongoose.Schema({
  //标题
  title: {
    type: String,
    required: true
  },
  //时间
  time: Date,
  //类型
  type: {
    type: String,
    default: '-1'
  },
  //金额
  account: {
    type: Number,
    required: true
  },
  //备注
  remarks: String
})

const AccountsModel = mongoose.model('accounts', AccountsSchema)
module.exports = AccountsModel