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
  const booksSchema = new mongoose.Schema({
    id: {
      type: mongoose.Schema.Types.Decimal128,
      unique: true
    },
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      default: '匿名'
    },
    style: {
      type: String,
      enum: ['言情', '科幻', '武打'],
    },
    account: Number 
  })
  //6. 创建模型对象  对文档操作的封装对象
  const bookModel = mongoose.model('books', booksSchema)
  //7. 新增
  bookModel.create({
    id: Math.random(),
    title: '小穗子的书',
    // author: 'Ink.Chen',
    style: '科幻',
    account: 66
  }).then((data) => {
    console.log(data);
    //8. 关闭数据库连接 (项目运行过程中, 不会添加该代码)
    mongoose.disconnect();
  })
})

mongoose.connection.on('error', () => {
  console.log('链接错误');
})
mongoose.connection.on('close', () => {
  console.log('链接关闭');
})