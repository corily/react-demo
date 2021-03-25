/*
  redux： 三大核心
    1、actions
    2、store   createStore(reducers)
    3、reducers  reducers(prevStore, actions)
  
  注意：redux只负责状态管理更新，不进行视图更新，需要用 store.subscribe(() => {}) 手动更新视图
*/

import React, { Component } from 'react'
import store from './redux/store'
import { 
  createIncrementAction, 
  createDecrementAction,
  createIncrementAsyncAction,
  createDecrementAsyncAction,
} from './redux/actions'


export default class ReduxDemo extends Component {
  componentDidMount () {
    // dispatch已经触发store更新，但是视图没有更新（render函数没有执行），需要手动触发render函数
    // subscribe：redux中的状态变化，就会触发此方法
    // 也可以在入口文件中调用subscribe  store.subscribe(() => { ReactDom.render(<App/>, document.getElementById('root')) })
    store.subscribe(() => {
      this.setState({})
    })
  }

  increment = () => {
    let { value } = this.selectRef
    value = value * 1
    // store.dispatch({type: 'increment', data: value})
    // store.dispatch(createIncrementAction(value))
    store.dispatch(createIncrementAsyncAction(value))
  }
  decrement = () => {
    let { value } = this.selectRef
    value = value * 1
    // store.dispatch({type: 'decrement', data: value})
    // store.dispatch(createDecrementAction(value))
    store.dispatch(createDecrementAsyncAction(value))
  }

  render() {
    return (
      <div>
        <p>15 - redux 状态管理</p>
        <p>store： { store.getState() }</p>
        <select ref={c => this.selectRef = c} style={{marginRight: '10px', width: '50px'}}>
          <option value="1"> 1 </option>
          <option value="2"> 2 </option>
          <option value="3"> 3 </option>
          <option value="4"> 4 </option>
        </select>
        <button style={{marginRight: '10px'}} onClick={this.increment}> + </button>
        <button onClick={this.decrement}> - </button>
      </div>
    )
  }
}
