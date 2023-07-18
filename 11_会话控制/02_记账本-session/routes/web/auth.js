var express = require('express');
var router = express.Router();
const { UsersModel } = require('../../models/UserModel');
const md5 = require('md5');

// 注册
router.get('/reg', function(req, res, next) {
  console.log(2222);
  res.render('auth/reg');
});
//注册用户
router.post('/reg', function(req, res, next) {
  const { username, password } = req.body
  // console.log(username, password, req.body );
  //做表单验证
  //获取请求体的数据
  UsersModel.create({...req.body, password: md5(password)})
  .then(data => {
    console.log(data);
    // res.send(`恭喜你， ${username}注册成功`);
    if (!data) return new Promise()
    // res.render('auth/login')
    res.render('success', {msg: '注册成功', route: '/login'});
  })
  .catch(err => {
    res.send('注册失败')
  })
});

// 登录
router.get('/login', function(req, res, next) {
  //响应 HTML 内容
  res.render('auth/login');
});
//登录操作
router.post('/login', function(req, res, next) {
  //获取用户名和密码
  const { username, password } = req.body
  //查询数据库
  UsersModel.findOne({ username, password: md5(password)})
  .then(data => {
    console.log(data);
    // res.send(`恭喜你， ${username}登录成功`);
    if (!data) return new Promise()
    //写入session
    req.session.username = data.username
    req.session._id = data._id
    res.render('success', {msg: '登录成功', route: '/accounts'});
  })
  .catch(err => {
    res.send('用户名或密码错误')
  })
});
//退出登录
// router.get('/logout', function(req, res, next) { // get会引起csrf攻击
router.post('/logout', function(req, res, next) {
  //销毁 session
  req.session.destroy(() => {
    res.render('success', {msg: '退出成功', route: '/login'});
  })
});
module.exports = router;
