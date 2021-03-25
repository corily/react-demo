/*
    错误边界 Error Boundary：
        特点： 只能捕获后代组件生命周期产生的错误，渲染备用页面。不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误
        使用： getDerivedStateFromError 配合 componentDidCatch【需要在父组件处理】
    
    注： 只在生产环境生效，开发环境短暂生效后又会展示错误
*/


import React, { PureComponent } from 'react'

export default class ErrorBoundaryDemo extends PureComponent {
  state = { hasError: false }

  // 此钩子在后代组件出错时 就会触发
  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError: 后代组件错误就会触发')
    return {hasError: error}
  }

  // 可以用此钩子统计页面的错误，用于错误上报
  componentDidCatch(error, info) {
    console.log('componentDidCatch: 错误上报', error, info)
  }

  render() {
    return (
      <div className='parent'>
        <p>17-7 Error Boundary 错误边界（捕获后代组件生命周期产生的错误）【getDerivedStateFromError 配合 componentDidCatch】</p>
        <h3>A组件</h3>
        { this.state.hasError ? '网络繁忙，请稍后再试~' : <Child/> }
      </div>
    )
  }
}


class Child extends PureComponent {

  state = {
    users: [
      {id: 1, name: 'tom'},
      {id: 2, name: 'jack'}
    ]
  }

  render() {
    return (
      <div className='child'>
        <h3>B组件</h3>
        {
          this.state.users.map(({id, name}) => <p key={id}>名称：{name}</p>)
        }
      </div>
    )
  }
}
