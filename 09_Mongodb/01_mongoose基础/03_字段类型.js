// const { ObjectId } = require('mongodb')
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
    title: String,
    author: String,
    account: Number,
    hobby: Array,
    arbitrary: mongoose.Schema.Types.Mixed, // 任意类型
    foreign_key: mongoose.Schema.Types.ObjectId, // 对象 ID 一般用于外键（与其他集合产生关联关系的字段），需要使用mongoose.Schema.Types.ObjectId指定
    pub_time: Date
  })
  //6. 创建模型对象  对文档操作的封装对象
  const bookModel = mongoose.model('books', booksSchema)
  //7. 新增
  // bookModel.create({
  //   title: '小穗子的书',
  //   author: 'Ink.Chen',
  //   account: 66
  // }, (err, data) => { // 这种写法新版不再支持
  //   console.log(err, data);
  // })
  bookModel.create({
    title: '小穗子的书',
    author: 'Ink.Chen',
    hobby: ['吃饭','睡觉','打豆豆'],
    account: 66,
    arbitrary: '任意类型',
    pub_time: new Date(),
    foreign_key: '61dc2d31bbe643fc32022a6f'
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