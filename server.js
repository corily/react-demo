const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('请求来自：', req.get('Host'))
  next()
})

app.get('/getStudents', (req, res) => {
  const students = [
    { id: 1, name: 'tom', age: 16 },
    { id: 2, name: 'stev', age: 17 },
    { id: 3, name: 'coco', age: 18 },
    { id: 4, name: 'yoa', age: 19 },
    { id: 5, name: 'baller', age: 20 },
  ]
  res.send(students)
})

app.listen(5000, err => {
  if (!err) console.log('服务器已经启动了，请求学生信息： http://localhost:5000/getStudents')
})