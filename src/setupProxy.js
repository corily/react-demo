const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(proxy('/api1', {
    target: 'http://localhost:5000',
    // 控制服务器收到的请求头中Host的值，true：代理的host（此处为target值）
    changeOrigin: true,
    // 重写请求路径: http://localhost:3000/api1/xxx  -->  http://localhost:3000/xxx
    pathRewrite: {
      '^/api1': ''
    }
  }))
  app.use(proxy('/api2', {
    target: 'http://localhost:5001',
    changeOrigin: true,
    pathRewrite: {
      '^/api2': ''
    }
  }))
}