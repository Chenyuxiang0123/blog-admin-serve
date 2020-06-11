const router = require('koa-router')({
  prefix: '/api/admin'
})

//注册user路由
router.use(require('./user/index'))

module.exports = router.routes()