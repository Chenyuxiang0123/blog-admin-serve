const router = require('koa-router')()

module.exports = app => {
  //注册 admin路由
  router.use(require('./admin/admin'))

  app.use(router.routes(),router.allowedMethods())
}