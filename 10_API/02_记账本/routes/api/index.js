var express = require('express');
var router = express.Router();
const AccountsModel = require('../../models/AccountsModel')
const moment = require('moment');

// 获取记账本的列表
router.get('/accounts', function(req, res, next) {
  AccountsModel.find().sort({ time: -1 }).exec()
  .then(data => {
    res.json({
      code: '0000',
      message: '获取列表成功',
      data
    })
  })
  .catch(err => {
    res.json({
      code: '1001',
      message: '获取列表失败',
      data: err
    })
  })
});
// 点击新增
router.post('/create', function(req, res, next) {
  console.log(req.body);
  AccountsModel.create({
    ...req.body,
    time: moment(req.body.time).toDate()
  })
  .then(data => {
    res.json({
      code: '0000',
      message: '添加成功',
      data
    })
  })
  .catch(err => {
    res.json({
      code: '1002',
      message: '添加失败',
      data: err
    })
  })
});

// 点击删除
router.delete('/delete/:_id', function(req, res, next) {
  console.log(req.params);
  const _id = req.params._id
  AccountsModel.deleteOne({"_id": _id})
  .then(data => {
    res.json({
      code: '0000',
      message: '删除成功',
      data
    })
  })
  .catch(err => {
    res.json({
      code: '1003',
      message: '删除失败',
      data: err
    })
  })
});
// 获取单个记账本
router.get('/accounts/:id', function(req, res, next) {
  AccountsModel.findById(req.params.id).sort({ time: -1 }).exec()
  .then(data => {
    res.json({
      code: '0000',
      message: '获取单个账单成功',
      data
    })
  })
  .catch(err => {
    res.json({
      code: '1004',
      message: '获取单个账单失败',
      data: err
    })
  })
});

// 修改单个记账本
router.patch('/accounts/:id', function(req, res, next) {
  console.log(req.params, req.body);
  const _id = req.params.id
  AccountsModel
  .updateOne({_id}, req.body)
  .then(res => {
    console.log(res);
      AccountsModel.findById({ _id })
      .then(data => {
        res.json({
          code: '0000',
          message: '修改单个账单成功~~~~',
          data
        })
      })
  })
  .catch(err => {
    res.json({
      code: '1004',
      message: '修改单个账单失败',
      data: err
    })
  })
});

module.exports = router;
