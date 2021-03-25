
/*
  react-redux
    1、 UI组件： 不能使用任何 redux 的 api， 只负责页面的呈现、交互等，用 this.props 访问状态

    2、 容器组件： 负责和 redux 通信，将结果交给 UI组件

    3、 容器组件的创建： 用 react-redux 的 connect 函数创建容器组件
          connect(mapStateToProps, mapDispatchToProps)(UI组件)
              mapStateToProps： 函数， 映射状态，返回值是一个 Object
              mapDispatchToProps： 函数， 映射操作状态的方法， 返回值是一个 Object

    4、 容器组件的 store 用 props 传递给 UI组件

    5、 connect 函数会自动监测状态变化，更新视图（不用手动调用 store.subscribe() 更新视图）

    6、 Provider 组件：多个容器组件都需要传入 store 时， 可用 Provider 组件传入 store，并将容器组件放在 Provider 组件里



  redux:
    1、createStore： 创建一个store   
          createStore(allReducers, composeWithDevTools(applyMiddleware(reduxThunk)))

    2、applyMiddleware： 结合redux-thunk使用，用于支持异步action

    3、combineReducers： 合并多个reducer，接收一个对象参数  
          allReducers = combineReducers({ a: aReducer, b: bReducer})


  组件通信方式：
      1、props:
          (1) children props
          (2) render props
      2、消息订阅-发布
          pubs-sub、 event 等等
      3、集中式管理
          redux、 dva 等等
      4、context
          生产者-消费者模式


  搭配使用：
      父子组件： props
      兄弟(非嵌套)组件： 消息订阅-发布、 集中式管理
      祖孙组件： 消息订阅-发布、集中式管理、context(开发用的少， 封装插件用的多)

*/

import React, {Component} from 'react'
import Count from './containers/count'
import Cat from './containers/cat'

import store from './redux/store'

import { Provider } from 'react-redux'


export default class ReactReduxDemo extends Component {

  render () {
    return <Provider store={store}>
      <Count/>
      <Cat/>
      {/* <Container1/>
      <Container2/>
      <Container3/> */}
    </Provider>
  }
}
