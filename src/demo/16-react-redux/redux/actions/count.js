import { INCREMENT, DECREMENT } from '../constant'

/*
    1、同步action   返回 一般对象 Object
    2、异步action   返回  function
        异步action，需要使用redux的中间件 applyMiddleware 方法，接收一个参数（redux-thunk库）
        createStore(reducters, applyMiddleware(thunk))
*/

// 同步action
export const createIncrementAction = data => ({type: INCREMENT, data})
export const createDecrementAction = data => ({type: DECREMENT, data})

// 异步action
export const createIncrementAsyncAction = (data, time = 1000) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, time);
  }
}
export const createDecrementAsyncAction = (data, time = 1000) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createDecrementAction(data))
    }, time);
  }
}
