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
  },
  register: async (ctx, next) => {
    let res = await userService.getRegisterResult(ctx);
    ctx.body = {
      code: res.code,
      type: res.type,
      message: res.message
    }
  },
  code: async (ctx, next) => {
    let res = await userService.getCode(ctx);
    ctx.body = {
      code: res.code,
      type: res.type,
      message: res.message
    }
  }
}