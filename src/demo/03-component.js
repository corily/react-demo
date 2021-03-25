import React from 'react'
import PropTypes from 'prop-types'

/*
  1、 函数式组件 适用于 简单 组件（无 state）
  2、 类式组件 适用于 复杂 组件（有 state）


  组件（实例）的三大核心属性
    1、 state
    2、 props
    3、 refs
*/


/*
  this 在严格模式（use strict）下的指向
  1、 全局作用下 this  -> window
  2、 函数里的 this ->  undefined
  3、 对象的函数（方法）的 this  -> 调用函数的对象实例

  注：class 类中的方法默认开启局部的严格模式 'use strict'
*/

/*
    组件优化：
      Component组件的2个问题：（效率低）
          1、 只要执行了 setState() ，即使不改变状态数据，组件也会重新render
          2、 只要当前组件重新render，就会自动重新render子组件，即使子组件没有使用到父组件的任务数据

      原因： Component中的 shouldComponentUpdate 钩子总是返回 true
      
      效率高做法：
          只有当组件的 state 或 props 数据发生改变时才重新render

      解决方法：2种
          1、 重写 shouldComponentUpdate 钩子， 判断是否需要更新render
          2、 使用 PureComponent 组件代替 Component 组件

*/

export class MyClassComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isHost: true
    }
    // 将原型对象上的toggle方法调用 bind ，返回一个新函数，并修改 this 指向
    // 左侧的toggle方法在实例对象上， 右侧的toggle方法正在原型对象上__proto__
    this.toggle = this.toggle.bind(this)
  }
  // render方法必须有，且必须有 return，render方法是由实例对象调用的，其他一般方法不一定是实例对象调用的
  render () {
    console.log('render中的this：', this) // MyClassComponent new 出来的实例对象（组件实例对象）
    // this  {  props: {}, refs: {}, state: null,  ...  }
    return <div>
      <p>03 - class compoent 666</p>
      {/* <p onClick={() => this.toggle()}>今天天气很 { this.state.isHost ? 'nice' : '炎热' }</p> */}



      {/* 结合构造器的 this.toggle = this.toggle.bind(this) 使用 */}
      <p onClick={this.toggle}>今天天气很 { this.state.isHost ? 'nice' : '炎热' }</p>



      {/* 以下是直接把toggle方法给click事件，点击时是直接调用，不是实例对象调用，此时toggle方法里的this为undefined */}
      {/* <p onClick={this.toggle}>今天天气很 { this.state.isHost ? 'nice' : '炎热' }</p> */}
    </div>
  }

  toggle () {
    this.setState({ isHost: !this.state.isHost })
  }
}


export const MyFuncComponent = function (props) {
  return <p>03 - func component props参数：{props.name}</p>
}
MyFuncComponent.propTypes = {
  name: PropTypes.string.isRequired
}
