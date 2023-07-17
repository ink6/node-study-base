const db = require('./db/db')
const BookModel = require('./models/BooksModel')
db(()=> {
  BookModel.find().select({ name: 1, author: 1, _id: 0 }).exec() // _id是默认返回 0不返回
  .then(res => {
    console.log(res);
  })
}, () => {
  console.log('链接失败');
})







