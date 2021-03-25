/*
   context: React.createContext()  
      1、 const MyContext = React.createContext()
      2、作用： 用于祖孙组件之间的通信传递
      3、子组件用 MyContext.Provider 包裹，通过 value 属性 传递数据
            <MyContext.Provider value={data}>
              <Child></Child>
            </MyContext.Provider>

      在类组件里：
          1、在要使用的孙组件里声明接收  static contextType = MyContext
          2、用 this.context 访问数据

      在函数组件里：
          1、 在要使用的孙函数组件里， 用 Consumer 组件包裹，Consumer内是一个函数，参数是要接收的数据value
            <Consumer>
             { value => { } }
            </Consumer>

    注： 一般不用context，推荐使用 react-redux
*/

import React, { Component } from 'react'

const MyContext = React.createContext()
const { Provider, Consumer } = MyContext

export default class ContextDemo extends Component {
  state = { name: 'tom', age: 8 }

  render() {
    const { name, age } = this.state
    return (
      <div className='parent'>
        <p>17-4 React.createContext 祖孙组件通信</p>
        <h3>A组件</h3>
        <h5>名字： {name} ------ 年龄：{age}</h5>
        <Provider value={{name, age}}>
          <B/>
        </Provider>
      </div>
    )
  }
}


class B extends Component {
  render() {
    console.log('B:', this.context)
    return (
      <div className='child'>
        <h3>B组件</h3>
        <C/>
      </div>
    )
  }
}

// 类组件接收法
// class C extends Component {
//   // 声明要接收context:  static contextType = xxxContext
//   static contextType = MyContext

//   render() {
//     console.log('C:', this.context)
//     const { name, age } = this.context
//     return (
//       <div className='grandson'>
//         <h3>C组件</h3>
//         <h5>从A组件接收到的数据：名字： {name} ------ 年龄：{age}</h5>
//       </div>
//     )
//   }
// }

// 函数组件接收法： 使用 Consumer 组件
function C () {
  return (
    <div className='grandson'>
      <h3>C组件</h3>
      <Consumer>
        {
          value => {
            const { name, age } = value
            return <h5>从A组件接收到的数据：名字： {name} ------ 年龄：{age}</h5>
          }
        }
      </Consumer>
    </div>
  )
}