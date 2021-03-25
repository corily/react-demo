// 扩展内容
import React, { Component } from 'react'

export default class SetStateDemo extends Component {

  state = {
    num: 0
  }

  add = () => {
    // setState(stateChange [, callback]) 异步操作

    // 对象式的 setState
    // this.setState({num: this.state.num + 1}, () => {
    //   // 更新state，并更新视图（render()执行后）后执行此回调函数
    //   console.log('+1后，num: ', this.state.num)
    // })

    // 函数式的 setState
    this.setState(
      (state, props) => ({num: state.num + 1}),
      () => {
        // 更新state，并更新视图（render()执行后）后执行此回调函数
        console.log('+1后，num: ', this.state.num)
      }
    )
  }

  render() {
    return (
      <div>
        <div>17-1 setState</div>
        <span>数字：{this.state.num}</span>
        <button onClick={this.add} style={{marginLeft: '16px'}}>+1</button>
      </div>
    )
  }
}
