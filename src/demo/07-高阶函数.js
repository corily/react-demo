import React from 'react'

/*
    高阶函数定义：
      1、 A函数，接收的参数是一个函数， 则A就是高阶函数
      2、 A函数，调用的返回值是一个函数， 则A就是高阶函数

    函数的柯里化： 通过函数调用继续返回函数的方式，实现多次接收参数，最后统一处理的函数编码形式

*/
// 函数的柯里化
// function sum (a) {
//   return (b) => {
//     return (c) => {
//       return a + b + c
//     }
//   }
// }
// console.log( sum(1)(2)(3) )   // 6

export default class HighFuncDemo extends React.Component {

  state = {
    username: '',
    password: '',
  }

  render () {
    return (
      <form onSubmit={this.handlerSubmit}>
        <p>07 - 高阶函数</p>
        {/* 函数的柯里化 */}
        <p>函数的柯里化</p>
        用户名：<input onChange={this.saveFormData('username')} type="text" name="username" />
        密  码：<input onChange={this.saveFormData('password')} type="password" name="password" /><br/>


        {/* 不用函数的柯里化 */}
        <p>不用函数的柯里化, onChange绑定箭头函数</p>
        用户名：<input onChange={e => this.saveFormData2('username', e)} type="text" name="username" />
        密  码：<input onChange={e => this.saveFormData2('password', e)} type="password" name="password" />
        <button>登录</button>
      </form>
    )
  }

  handlerSubmit = (event) => {
    event.preventDefault()
    const { username, password } = this.state
    alert(`用户名：${username} ， 密 码：${password}`)

  }

  // 函数的柯里化
  saveFormData = (field) => {
    // onChange绑定一个函数，该函数在触发时，会自动接收event参数
    return (event) => {
      this.setState({ [field]: event.target.value })
    }
  }

  // 不用函数的柯里化
  saveFormData2 = (field, event) => {
    this.setState({ [field]: event.target.value })
  }
}
