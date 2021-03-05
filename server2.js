const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('请求来自：', req.get('Host'))
  next()
})

app.get('/getCar', (req, res) => {
  const cars = [
    { id: 1, name: '比亚迪' },
    { id: 2, name: '奥迪' },
    { id: 3, name: '奔驰' }
  ]
  res.send(cars)
})

app.listen(5001, err => {
  if (!err) console.log('服务器已经启动了，请求汽车信息： http://localhost:5001/getCar')
})