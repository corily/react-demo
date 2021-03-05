import React, { Component } from 'react'
import axios from 'axios'

/*
    设置代理
      方法1： 在package.json里加 proxy 字段 设置，proxy字段：string（新版本）
            {
              "proxy": "http://localhost:5000"
            }
      方法2： 在src目录下加 setupProxy.js 文件，在里面通过 http-proxy-middleware 设置代理
            可以配置多个代理
*/

export default class ProxyDemo extends Component {
  
  state = { data: [] }

  getData = () => {
    axios.get('/api1/getStudents').then(res => {
      console.log('getStudents 请求成功~', res)
      this.setState({ data: res })
    }).catch(err => {
      console.log('getStudents 请求失败~~', err)
    })
    axios.get('/api2/getCar').then(res => {
      console.log('getCar 请求成功~', res)
      this.setState({ data: res })
    }).catch(err => {
      console.log('getCar 请求失败~~', err)
    })
  }

  render() {
    return (
      <div>
        <p>11 - proxy 设置代理</p>
        <button onClick={this.getData}>请求数据</button>
      </div>
    )
  }
}
