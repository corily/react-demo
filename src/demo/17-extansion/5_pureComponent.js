/*
    组件优化：
      Component组件的2个问题：（效率低）
          1、 只要执行了 setState() ，即使不改变状态数据，组件也会重新render
          2、 只要当前组件重新render，就会自动重新render子组件，即使子组件没有使用到父组件的任务数据

      原因： Component中的 shouldComponentUpdate 钩子总是返回 true
      
      效率高做法：
          只有当组件的 state 或 props 数据发生改变时才重新render

      解决方法：2种
          1、 重写 shouldComponentUpdate 钩子， 比较新旧 state 或 props ，判断是否需要更新render
          2、 使用 PureComponent 组件代替 Component 组件（ PureComponent 重写了 shouldComponentUpdate ）

      PureComponent组件问题：
          setState(obj) obj必须是一个新对象
          只进行了 state 和 props 数据的 浅比较

      推荐使用 PureComponent 来优化

*/

import React, { Component, PureComponent } from 'react'

export default class PureComponentDemo extends PureComponent {

  state = { name: 'tom', arr: [1,2,3,4] }

  change = () => {
    this.setState({ name: 'jack' })

    // 视图不会更新
    // const obj = this.state
    // obj.name = 'jack'
    // this.setState(obj)

    // 视图不会更新
    // const { arr } = this.state
    // arr.unshift(5)
    // this.setState({arr})

    this.setState({ arr: [5, ...this.state.arr] })
  }

  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log('当前的：', this.props, this.state)
  //   console.log('将要更新的：', nextProps, nextState)
  //   return this.state.name !== nextState.name
  // }

  render() {
    console.log('@@ Parent render---')
    const { name } = this.state
    return (
      <div className="parent">
        <p>17-5 PureComponent 组件代替 Component 组件，减少不必要的render，提高效率</p>
        <p>A组件</p>
        <span>名称：{name}</span>
        <button onClick={this.change} style={{marginLeft: '10px'}}>改名</button>
        {/* <Child name={name}/> */}
        <Child/>
      </div>
    )
  }
}

class Child extends PureComponent {

  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log('BB 当前的：', this.props, this.state)
  //   console.log('BB 将要更新的：', nextProps, nextState)
  //   return this.props.name !== nextProps.name
  // }

  render() {
    console.log('@@ Child render---')
    const { name } = this.props
    return (
      <div className="child">
        <p>B组件</p>
        <span>接收到的名称：{name}</span>
      </div>
    )
  }
}
