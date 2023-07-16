var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// /users/test
router.get('/test', function(req, res, next) {
  res.send('用户测试');
});
module.exports = router;
