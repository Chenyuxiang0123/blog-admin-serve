const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  email: {
    type: String
  },
  code: {
    type: String
  },
  time: {
    type: Date
  }
})
module.exports = mongoose.model("Code",schema)