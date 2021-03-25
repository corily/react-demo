// 链接容器组件和UI组件
import { connect } from 'react-redux'

/*
  connect: 
    1、是一个函数，接收两个参数，都是function
        参数1： mapStateToProps  返回给UI组件的状态
        参数2： mapDispatchToProps  返回操作状态的方法
    2、返回值也是一个函数，接收一个参数（UI组件）
*/

import { 
  createIncrementAction, 
  createDecrementAction,
  createIncrementAsyncAction,
  createDecrementAsyncAction,
} from '../redux/actions/count'


import React, { Component } from 'react';


// 定义UI组件
class CountDemo extends Component {
  increment =  () => {
    const value = this.selectRef.value * 1
    this.props.increment(value)
  }
  decrement = () => {
    const value = this.selectRef.value * 1
    this.props.decrement(value)
  }
  asyncIncrement =  () => {
    const value = this.selectRef.value * 1
    this.props.asyncIncrement(value)
  }
  asyncDecrement = () => {
    const value = this.selectRef.value * 1
    this.props.asyncDecrement(value)
  }

  render() {
    return (
      <div>
        <p>16 - react-redux 状态管理</p>
        <p>所求之和： {this.props.count}  -----   猫咪数量： {this.props.cats}</p>
        <select ref={c => this.selectRef = c} style={{marginRight: '10px', width: '50px'}}>
          <option value="1"> 1 </option>
          <option value="2"> 2 </option>
          <option value="3"> 3 </option>
          <option value="4"> 4 </option>
        </select>
        <button onClick={this.increment}> + </button>
        <button onClick={this.decrement} style={{margin: '0 10px'}}> - </button>
        <button onClick={this.asyncIncrement}> 异步+ </button>
        <button onClick={this.asyncDecrement} style={{margin: '0 10px'}}> 异步- </button>
      </div>
    );
  }
}






// const mapStateToProps = (state) => ({count: state})

// const mapDispatchToProps = (dispatch) => ({
//   increment: value => dispatch(createIncrementAction(value)),
//   decrement: value => dispatch(createDecrementAction(value)),
//   asyncIncrement: value => dispatch(createIncrementAsyncAction(value)),
//   asyncDecrement: value => dispatch(createDecrementAsyncAction(value)),
// })


// export default connect(mapStateToProps, mapDispatchToProps)(CountDemo)





export default connect(
  state => ({ count: state.count, cats: state.cats.length }),

  // mapDispatchToProps一般写法
  // dispatch => ({
  //   increment: value => dispatch(createIncrementAction(value)),
  //   decrement: value => dispatch(createDecrementAction(value)),
  //   asyncIncrement: value => dispatch(createIncrementAsyncAction(value)),
  //   asyncDecrement: value => dispatch(createDecrementAsyncAction(value)),
  // }),

  // mapDispatchToProps 简写
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    asyncIncrement: createIncrementAsyncAction,
    asyncDecrement: createDecrementAsyncAction,
  }
)(CountDemo)