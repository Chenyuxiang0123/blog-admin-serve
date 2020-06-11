const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  email: String,
  password: String,
  name: {
    type: String,
    default: 'admin'
  },
  userImg: {
    type: String,
    default: 'http://locahost:5000/images/404.png'
  }
})
module.exports = mongoose.model('AdminUser',schema)