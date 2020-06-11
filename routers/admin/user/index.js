const router = require('koa-router')({
  prefix: '/user'
})
const Users = require('../../../controller/user/index')

//获取所有用户
router.get('/', Users.user)

//新增用户
router.post('/add', Users.add)

//获取用户详情
router.post('/detail/:id', Users.detail)

//删除用户
router.post('/delete/:id', Users.delete)

//用户注册
router.post('/register', Users.register)

//获取验证码
router.post('/code',Users.code)

module.exports = router.routes()