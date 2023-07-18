//导入 jwt
const jwt = require('jsonwebtoken')

//创建(生成) token 
// let token = jwt.sign(用户数据, 加密字符串, 配置对象);
// const token = jwt.sign({
//   username: 'Ink.Chen'
// }, 'baoziloveme', {
//   expiresIn: 60 //单位是秒
// })
// console.log(token);

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikluay5DaGVuIiwiaWF0IjoxNjg5Njc1MzgzLCJleHAiOjE2ODk2NzU0NDN9.XlqzVF-A_Yoqs9YxWCMTvv24MOM_4Mm8zpixXOBfdP0'
jwt.verify(token, 'baoziloveme', (err, data) => {
  if(err){
    console.log('校验失败~~', err);
    return
  }
  console.log(data);
})