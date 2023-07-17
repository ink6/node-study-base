var express = require('express');
var router = express.Router();
const path = require('path')
const low = require('lowdb')
//导入 lowdb
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(path.resolve(__dirname, '../data/db.json'))
//获取 db 对象
const db = low(adapter)
//导入 shortid
const shortid = require('shortid');
// 初始化 只需要执行一次 放开会一直执行会进入死循环
// db.defaults({ accounts: [] }).write()
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// 新增记录表单页面
router.get('/create', function(req, res, next) {
  res.render('create');
});
// 点击新增
router.post('/create', function(req, res, next) {
  // console.log(req.body);//生成 id
  let id = shortid.generate();
  db.get('accounts').unshift({ id, ...req.body}).write()
  res.render('success', { type: 'success', msg: '添加成功', route: '/accounts'});
});
// 点击删除
router.get('/delete/:id', function(req, res, next) {
  console.log(req.params);
  // console.log(req.body);
  const id = req.params.id * 1
  db.get('accounts').remove({id:id}).write();
  res.render('success', { type: 'success', msg: '删除成功', route: '/accounts'});
});

router.get('/accounts', function(req, res, next) {
  const accounts = db.get('accounts').value()
  res.render('list', { accounts });
});
module.exports = router;
