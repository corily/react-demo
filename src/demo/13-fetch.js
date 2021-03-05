import React, { Component } from 'react'

/*
    请求：
      1、 xhr（XMLHttpRequest）  axios 、  jquery的ajax 都是基于xhr的封装
              1. axios： 可在浏览器和nodejs中使用，基于promise的http库
      2、 fetch  关注分离
              优点：
                1. 基于promise
                2. 跨域的处理 设置mode: 'no-cors',
              缺点：
                a. 只对网络请求报错，对400，500都当做成功的请求，需要封装去处理
                b. 默认不会带cookie，需要添加配置项credentials。
                c. 不支持abort、不支持超时控制

*/

export default class FetchDemo extends Component {

  getData = async () => {
    // fetch('/api1/getStudents', { mode: 'no-cors' })
    //   .then(res => {
    //     console.log('联系服务器成功了', res)
    //     // 网络请求报错400、500， 走这里
    //     return res.json()
    //   })
    //   .then(res => {
    //     console.log('请求数据成功了', res)
    //   })
    //   .catch(err => {
    //     console.log('请求失败了', err)
    //   })

    try {
      const res = await (await fetch('/api1/getStudents')).json()
      console.log(res)
    } catch (err) {
      console.log('请求失败了', err)
    }
  }
  componentDidMount () {
    this.getData()
  }

  render() {
    return (
      <div>
        13 - fetch 发送请求
      </div>
    )
  }
}
