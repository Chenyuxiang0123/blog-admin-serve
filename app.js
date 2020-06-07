const Koa = require('koa')
const cors = require("@koa/cors")
const static = require("koa-static")
const {join} = require("path")
const json = require('koa-json')
const koaBody = require("koa-body")

const app = new Koa()

//将路由挂载到app
require('./routers/index')(app)

//连接数据库
require('./dbs/index')(app)

app
  .use(static(join(__dirname, "public"))) //指定加载静态资源的根目录,指定所有静态文件的根目录
  .use(koaBody()) //解析post请求的模块，监听POST请求，将数据存入ctx.request.body中
  .use(cors())  //允许跨域
  .use(json()) //处理json数据

app.listen(5000, () => {
  console.log("server running at localhost:5000")
})