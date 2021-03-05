import React from 'react'


export default class StateDemo extends React.Component {
  // 初始化状态
  state = { flag: true }
  render () {
    return <p onClick={this.toggle}>04 - state简写方式  {this.state.flag ? 'yes' : 'no'}</p>
  }
  // 自定义方法： 使用 赋值语句 + 箭头函数 方法 ，开发推荐使用
  // 此时toggle方法放在实例对象上，不在原型对象上
  toggle = () => {
    this.setState({ flag: !this.state.flag })
  }
}
