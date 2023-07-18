const mongoose = require('mongoose')

const UsersScheme = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
})

const UsersModel = mongoose.model('user', UsersScheme)

exports.UsersModel = UsersModel