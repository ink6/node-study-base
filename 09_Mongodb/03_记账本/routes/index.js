var express = require('express');
var router = express.Router();
const path = require('path')
const low = require('lowdb')
const AccountsModel = require('../models/AccountsModel')
const moment = require('moment');

//导入 lowdb
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(path.resolve(__dirname, '../data/db.json'))
//获取 db 对象
const db = low(adapter)

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
  console.log(req.body);
  AccountsModel.create({
    ...req.body,
    // time: new Date(req.body.time),
    time: moment(req.body.time).toDate()
  })
  .then(res => {
    console.log('添加成功');
  })
  res.render('success', { type: 'success', msg: '添加成功', route: '/accounts'});
});
// 点击删除
router.get('/delete/:_id', function(req, res, next) {
  console.log(req.params);
  const _id = req.params._id
  AccountsModel.deleteOne({"_id": _id})
  .then(result => {
    console.log(result);
    res.render('success', { type: 'success', msg: '删除成功', route: '/accounts'});
  })
});

router.get('/accounts', function(req, res, next) {
  AccountsModel.find().sort({ time: -1 }).exec()
  .then(accounts => {
    res.render('list', {
      accounts,
      moment
    });
  })
  
});
module.exports = router;
