import React from 'react'
import ReactDom from 'react-dom'

/* 
  新生命周期钩子（加上前缀 UNSAFE_ 即将废弃）： 不加上前缀，会警告
    1、UNSAFE_componentWillMount、 
    2、UNSAFE_componentWillUpdate、 
    3、UNSAFE_componentWillReceiveProps
*/

/*
  新增的生命钩子
      1、static getDerivedStateFromProps  静态方法
      2、getSnapshotBeforeUpdate
*/

/*
  常用钩子：
      1、componentDidMount
      2、render
      3、componentWillUnmount
*/


// 生命周期执行顺序：(挂载 -> 卸载) constructor -->  componentWillMount  -->  render  -->  componentDidMount  --> componentWillUnmount
export default class LifeDemo extends React.Component {

  state = { opacity: 1, name: 'coco' }

  

  // 初始化渲染 or 状态更新后 触发
  render () {
    console.log('render~~')
    const { opacity, name } = this.state
    return (
      <div>
        <p style={{ opacity }}>08 - 生命周期回调函数（生命周期钩子函数）  文字渐变透明，点击消失</p>
        <button onClick={this.death}>卸载组件</button>
        <button onClick={this.force}>强制更新</button>
        <button onClick={this.changeName}>修改name</button>
        <ChildDemo name={name}/>
      </div>
    )
  }

  // 卸载组件
  death = () => {
    clearInterval(this.timeId)
    ReactDom.unmountComponentAtNode(document.getElementById('root'))
  }

  force = () => {
    this.forceUpdate()
  }

  changeName = () => {
    this.setState({name: 'yoo'})
  }

  // state: state的初始值
  // 使用场景：state的值任何时候都取决于props时使用
  // 触发： 1、new props  2、setState()   3、forceUpdate()
  static getDerivedStateFromProps (props, state) {
    console.log('getDerivedStateFromProps~~', props, state)
    // A valid state object (or null)
    return null
    // return {name: 'yaaa'} // 返回state的属性，且return后，返回的属性name的值无法在用setState()修改，固定为yaaa
    // return props
  }

  // 触发：render后， componentDidUpdate前
  getSnapshotBeforeUpdate () {
    console.log('getSnapshotBeforeUpdate~~')
    // A snapshot value (or null) must be returned
    // snapshot value: Boolean、string、number、object...
    return null
  }

  // 组件将要挂载时触发
  // UNSAFE_componentWillMount () {
  //   console.log('componentWillMount~~')
  // }

  // 组件挂载完毕后触发
  componentDidMount () {
    console.log('componentDidMount~~')
    // this.timeId = setInterval(() => {
    //   let { opacity } = this.state
    //   opacity -= 0.1
    //   if (opacity <= 0) opacity = 1
    //   this.setState({ opacity })
    // }, 3000);
  }

  // 组件将要被卸载时触发（还没有卸载）
  componentWillUnmount () {
    console.log('componentWillUnmount~~')
    clearInterval(this.timeId)
  }



  // 组件更新类钩子

  // 组件是否要更新， 返回Boolean 没有写该钩子则默认 return true
  // 调用setState()后触发
  shouldComponentUpdate () {
    console.log('shouldComponentUpdate~~')
    return true
  }

  // 组件将要更新 （1、shouldComponentUpdate；2、调用forceUpdate()后可触发）
  // UNSAFE_componentWillUpdate () {
  //   console.log('componentWillUpdate~~')
  // }

  // 组件更新完毕后触发
  componentDidUpdate (preProps, preState, snapshotValue) {
    console.log('componentDidUpdate~~', preProps, preState, snapshotValue)
  }
}

class ChildDemo extends React.Component {
  // 父组件render后，子组件触发的钩子，首次（初始化）接收的props不触发此钩子
  UNSAFE_componentWillReceiveProps (props) {
    console.log('ChildDemo --- componentWillReceiveProps~~', props)
  }
  
  render () {
    return <p>子组件接收的props属性：name：{ this.props.name }</p>
  }
}
