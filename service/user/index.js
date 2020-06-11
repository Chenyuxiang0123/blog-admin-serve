// cosnt User = require("../../dbs/models/adminUser")
const {sendEmail} = require('../../utils/email')
const createCode = require('../../utils/createCode')
const ctypt = require('../../utils/crypt')
const Code = require('../../dbs/models/code')
const AdminUser = require('../../dbs/models/adminUser')

module.exports = {
  getUser: async() => {
    return [{name: '张三',age: 15},{name: '李四',age: 23},{name: '王五',age: 125}]
  },
  getRegisterResult: async (ctx) => {
    let { email, password, code } = ctx.request.body
    let res = await AdminUser.findOne({email})
    if(res){
      return {
        type: "error",
        message: "该邮箱已注册，可以直接登录！",
        code: -1
      }
    }
    let oldCode = await Code.find({code})
    if(!oldCode){
      return {
        type: 'error',
        message: "该验证码已过期,请重新申请！",
        code: -1
      }
    }
    let expire = new Date() - new Date(oldCode.time) > 15 * 60 * 1000 //15分钟

    if(expire){
      await Code.findByIdAndDelete(oldCode._id)
      return {
        type: 'error',
        message: "该验证码已过期,请重新申请！",
        code: -1
      }
    }
    await AdminUser.create({
      email,
      password: ctypt.encrypt(password)
    })
    await Code.findByIdAndDelete(oldCode)
    return {
      type: 'success',
      message: "注册成功！即将跳转到登录页面！",
      code: 0
    }
  },
  getCode: async (ctx) => {
    let code = createCode()
    let res = await sendEmail(ctx.request.body.email,code)
    let obj = {
      code,
      email: ctx.request.body.email,
      time: new Date()
    }
    if(res.messageId) {
      await Code.create(obj)
      return {
        type: "success",
        message: "验证码已发送s，请前往邮件查看！",
        code: 0
      }
    } else {
      return {
        type: "error",
        message: "验证码发送失败，请检查邮箱是否正确！",
        code: -1
      }
    }
  }
}