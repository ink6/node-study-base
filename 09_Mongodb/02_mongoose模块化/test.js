const db = require('./db/db')
const MovieModel = require('./models/MovieModel')
db(() => {
  MovieModel.insertMany([
    { title: '让子弹飞', director: '姜文' },
    { title: '八角笼中', director: '王宝强' }
  ])
  .then(res => {
    console.log('插入成功');
  })
}, () => {
  console.log('自己定义的链接失败');
})