/*
    Hooks
        1、 Hook 是 react 16.8.0 版本新增特性/语法
        2、 可以在函数组件中使用 state 以及其他的 react 特性



    三种常用的 Hook

        1、 State Hook：  React.useState(initValue)  在函数组件中使用 state
              参数可以是一般类型数据，也可以是一个 function
              返回一个数组  [value, setValueFunc] = React.useState(initValue)
              value: 当前状态值， setValueFunc 是 一个函数，用于设置状态 

        2、 Effect Hook： React.useEffect( () => {}, [] )  在函数组件中模拟类组件中的生命钩子
              参数1：是一个函数
                  函数返回一个函数，此返回函数 相当于 componentWillUnmount 钩子
              参数2：数组
                  不传：就默认检查全部的state，只要state有更新，就调用此函数， 相当于 render 钩子
                  空数组： 全部state都不检查，只在页面加载时调用一次，相当于 componentDidMount 钩子
                  传入某个state的字段：只在该state更新时，调用此函数

        3、 Ref Hook：    React.useRef()
              功能和 React.createRef() 一样
*/

import React from 'react'
import ReactDom from 'react-dom'

export default function HooksDemo () {

  const [sum, setSum] = React.useState(0)
  const [name, setName] = React.useState('yoyo')

  const add = () => {
    setSum(sum + 1)
  }
  const changeName = () => {
    setName('tom')
  }


  // React.useEffect(() => {
  //   console.log('@@')
  // })
 
  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setSum(sum => sum + 1)
  //   },  10 * 1000);
  //   // return 一个函数，相当于 componentWillUnmount 钩子
  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [])
  
  const unmount = () => {
    ReactDom.unmountComponentAtNode(document.getElementById('root'))
  }

  // React.useEffect(() => {
  //   setInterval(() => {
  //     setSum(sum => sum + 1)
  //   }, 1000);
  // }, [sum, name])


  const myRef = React.useRef()

  const show = () => {
    alert(myRef.current.value)
  }


  return (
    <div>
      <p>17-2 Hooks</p>
      <span>求和：{sum}</span>
      <button onClick={add} style={{marginLeft: '10px'}}>+1</button>
      <br/>
      <span>名字：{name}</span>
      <button onClick={changeName} style={{marginLeft: '10px'}}>React.useState 改名</button>
      <button onClick={unmount} style={{marginLeft: '10px'}}>React.useEffect 卸载组件</button>
      <br/>
      <input type="text" ref={myRef}/>
      <button onClick={show} style={{marginLeft: '10px'}}>React.useRef 获取内容</button>
    </div>
  )
}
