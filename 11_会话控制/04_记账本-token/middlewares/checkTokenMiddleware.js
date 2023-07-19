const jwt = require('jsonwebtoken')
const { secret } = require('../config/config')
const checkTokenMiddleware = (req, res, next) => {
  const token = req.get('token')
  if (!token) {
    return res.json({
      code: '1006',
      message: 'token 缺失',
      data: null
    })
  }
  jwt.verify(token, secret, (err, data) => {
    //检测 token 是否正确
    if (err) {
      return res.json({
        code: '2004',
        msg: 'token 校验失败~~',
        data: null
      })
    }
    res.user = data
    console.log(111, data);
    next()
  })
}
module.exports = checkTokenMiddleware