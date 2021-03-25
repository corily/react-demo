import React, { Component, Fragment } from 'react'

/*
    Fragment组件：
      1、不会真正渲染dom元素，类似vue的 template
      2、只接收 key 属性，其他属性接收了也没有意义
      3、简写 <></> 不可以接收任务属性

    注： react 16开始，render 支持返回 数组
    
*/
export default class FragmentDemo extends Component {
  render() {
    return (
      <Fragment>
        <p>17-3 Fragment 组件， 类似 vue 的 template</p>
      </Fragment>

      // <>
      //   <p>17-3 Fragment 组件， 类似 vue 的 template</p>
      // </>

      // [
      //   <p>17-3 Fragment 组件， 类似 vue 的 template</p>
      // ]
    )
  }
}
