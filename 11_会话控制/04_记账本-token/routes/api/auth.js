const express = require('express');
const jwt = require('jsonwebtoken')
const { UsersModel } = require('../../models/UserModel');
const md5 = require('md5');
const router = express.Router();

//登录操作
router.post('/login', function(req, res, next) {
  //获取用户名和密码
  const { username, password } = req.body
  //查询数据库
  UsersModel.findOne({ username, password: md5(password)})
  .then(data => {
    if (!data) return new Promise()
    //返回token
    const token = jwt.sign({
      username: data.username,
      _id: data._id
    }, 'baogeloveme', {
      expiresIn: 60 * 60 * 24 * 7
    })
    // req.session.username = data.username
    // req.session._id = data._id
    // res.render('success', {msg: '登录成功', route: '/accounts'});
    res.json({
      code: '0000',
      message: '登录成功',
      data: { token }
    })
  })
  .catch(err => {
    res.json({
      code: '1005',
      message: '登录失败 - 用户名密码错误',
      data: null
    })
  })
});
module.exports = router;
