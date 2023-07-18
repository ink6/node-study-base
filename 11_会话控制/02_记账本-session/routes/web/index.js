//导入 express
const express = require('express');
//导入 moment
const moment = require('moment');
const AccountsModel = require('../../models/AccountsModel')
//导入中间件检测登录
const checkLoginMiddleware = require('../../middlewares/checkLoginMiddleware')

//创建路由对象
const router = express.Router();
//添加首页路由规则
router.get('/', function(req, res, next) {
  //重定向 /account
  res.redirect('accounts');
});

// 新增记录表单页面
router.get('/create', checkLoginMiddleware, function(req, res, next) {
  res.render('create');
});
// 点击新增
router.post('/create', checkLoginMiddleware, function(req, res, next) {
  //插入数据库
  AccountsModel.create({
    ...req.body,
    //修改 time 属性的值
    // time: new Date(req.body.time),
    time: moment(req.body.time).toDate()
  })
  .then(res => {
    //成功提醒
    res.render('success', { type: 'success', msg: '添加成功', route: '/accounts'});
  })
});
// 点击删除
router.get('/delete/:_id', checkLoginMiddleware, function(req, res, next) {
  // console.log(req.params);
  //获取 params 的 id 参数
  const _id = req.params._id
  AccountsModel.deleteOne({"_id": _id})
  .then(result => {
    console.log(result);
    res.render('success', { type: 'success', msg: '删除成功', route: '/accounts'});
  })
});

//记账本的列表
router.get('/accounts', checkLoginMiddleware, function(req, res, next) {
  const username = req.session.username
  //读取集合信息
  AccountsModel.find().sort({ time: -1 }).exec()
  .then(accounts => {
    //响应成功的提示
    res.render('list', {
      accounts,
      moment,
      username
    });
  })
  
});
module.exports = router;
