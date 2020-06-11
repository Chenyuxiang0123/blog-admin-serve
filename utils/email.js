const nodemailer = require('nodemailer');

//创建发送邮件的请求对象
let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',    //发送端邮箱类型（QQ邮箱）
    port: 465,      //端口号
    secure: true, 
    auth: {
      user: '1013930927@qq.com', // 发送方的邮箱地址（自己的）
      pass: "evxejqbggehhbeee" // mtp 验证码
    }
});
function sendEmail(mail,code) {
  let mailObj = {
    from: '1013930927@qq.com',
    to: mail,
    subject: '注册验证码',  
    text: `您的验证码为：${code},有效时间15分钟,请妥善保管！` ,
    html: `<p>您的验证码为：${code},有效时间15分钟,请妥善保管！</p>`
  }
  return new Promise((resolve,reject) => {
    transporter.sendMail(mailObj, (err, data) => {
      if(err){
        reject(err) 
      }else{
        resolve(data)   
      }
    })
  })
}

module.exports = {
  sendEmail
}