const userService = require('../../service/user/index')
module.exports = {
  user: async (ctx, next) => {
    ctx.body = await userService.getUser()
  },
  detail: async (ctx, next) => {
    const data = ctx
    ctx.body = data
  },
  delete: async (ctx, next) => {
    ctx.body = '删除用户'
  },
  add: async (ctx, next) => {
    ctx.body = '新增用户'
  }
}