  ### jsx语法

 ```
  1、 class  -->  className
  2、 style={{key: value}}
  3、 标签首字母： 
        首字母小写，自动转换成html中的标签； 
        首字母大写，自动找react组件
  4、 标签中混入 【表达式】 时用 {}   表达式有返回值
  5、 只有一个根标签
  6、标签必须闭合
 ```

```
class 类
    1、 类中的方法默认开启局部的严格模式 'use strict'
    2、 类中可用直接写赋值语句 a = 1 （某个属性是固定值时使用）
    3、 构造器constructor(props)有参数时，要先调用 supper(props)
    4、 一般方法 ： 放在 类的原型对象上 __proto__

this 在严格模式（use strict）下的指向
    1、 全局作用下 this  -> window
    2、 函数里的 this ->  undefined
    3、 对象的函数（方法）的 this  -> 调用函数的对象实例


call 、bind 、 apply 这三个函数的第一个参数都是 this 的指向对象
    1、call: call(this对象，arg1， arg2，arg3...)    call  参数逐个加 

    2、bind： 返回一个新函数，必须再调用，参数和 call 一样  bind(this对象, arg1, arg2)()

    3、apply: apply(this对象，[arg1， arg2，arg3...])   apply 参数放在 [] 数组里
```

### React组件

```
  1、 函数式组件 适用于 简单 组件（无 state）【react 16版本开始，引入hooks，可以使用 state、并 模拟生命钩子】
  2、 类式组件 适用于 复杂 组件（有 state）


  组件（实例）的三大核心属性
    1、 state
    2、 props
    3、 refs
```

#### 组件优化

```
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
```

#### Props属性

```
设置props的属性规则:
    https://react.html.cn/docs/typechecking-with-proptypes.html

    import PropTypes from 'prop-types'

    static propTypes = {
      name: PropTypes.string.isRequired,
      age: PropTypes.number
    }
    static defaultProps = {
      age: 18
    }


    PropTypes类型：
        1、 array
        2、 bool
        3、 func
        4、 number
        5、 string
        6、 object
        ...
```

#### Refs属性

```
 refs使用方式 (勿过度使用 Refs)
    1、 string类型的   ref='input'
    2、 回调refs
        a. 内联函数   ref={c => this.input1 = c}
        b. class式绑定函数 ref={this.saveInput1}   saveInput1 = c => this.input1 = c
    3、 React.createRef()  react推荐使用  调用一次就生成一个ref，多个ref，要调用多次  this.input1.current.value

    注：回调refs  内联函数绑定ref，在组件更新时，会调用两次改内联函数
```

#### 高阶函数

```
 定义：
      1、 A函数，接收的参数是一个函数， 则A就是高阶函数
      2、 A函数，调用的返回值是一个函数， 则A就是高阶函数

  函数的柯里化： 通过函数调用继续返回函数的方式，实现多次接收参数，最后统一处理的函数编码形式

  function sum (a) {
    return (b) => {
      return (c) => {
        return a + b + c
      }
    }
  }
```


#### 生命周期钩子

```
生命周期:
    1、UNSAFE_componentWillMount
    2、UNSAFE_componentWillUpdate
    3、UNSAFE_componentWillReceiveProps
    4、static getDerivedStateFromProps
    5、getSnapshotBeforeUpdate
    6、componentDidMount
    7、render
    8、componentWillUnmount
    9、shouldComponentUpdate
    10、componentDidUpdate


生命周期执行顺序：(挂载 -> 卸载) 
constructor -->  UNSAFE_componentWillMount  -->  render  -->  componentDidMount  --> componentWillUnmount


  新生命周期钩子（加上前缀 UNSAFE_ 即将废弃）： 不加上前缀，会警告
      1、UNSAFE_componentWillMount、 
      2、UNSAFE_componentWillUpdate、 
      3、UNSAFE_componentWillReceiveProps

  新增的生命钩子
      1、static getDerivedStateFromProps(props, state)  静态方法
            使用场景：state的值任何时候都取决于props时使用
            触发： 
                1、new props  
                2、setState()   
                3、forceUpdate()
      2、getSnapshotBeforeUpdate
            触发：render后， componentDidUpdate前

  常用钩子：
      1、componentDidMount
      2、render
      3、componentWillUnmount
```


#### Diff算法


```
1. 虚拟DOM中key的作用：
        1). 简单的说: key是虚拟DOM对象的标识, 在更新显示时key起着极其重要的作用。

        2). 详细的说: 当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】, 
                随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：

      a. 旧虚拟DOM中找到了与新虚拟DOM相同的key：
            (1).若虚拟DOM中内容没变, 直接使用之前的真实DOM
            (2).若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM

      b. 旧虚拟DOM中未找到与新虚拟DOM相同的key
            根据数据创建新的真实DOM，随后渲染到到页面
              
2. 用index作为key可能会引发的问题：
      1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作:
              会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。

      2. 如果结构中还包含输入类的DOM：
              会产生错误DOM更新 ==> 界面有问题。
```


#### 样式模块化文件

```
  文件名格式： xxx.module.css
  引入： import xxx from 'xxx'
  使用： className={xxx.className}


  开发中可用css预处理器 sass/less 来解决样式冲突问题 (react中默认使用sass)
```

#### 设置代理

```javascript
  设置代理
      方法1： 在package.json里加 proxy 字段 设置，proxy字段：string（新版本）
            {
              "proxy": "http://localhost:5000"
            }
      方法2： 在src目录下加 setupProxy.js 文件，在里面通过 http-proxy-middleware 设置代理
            可以配置多个代理


  const proxy = require('http-proxy-middleware')

  module.exports = function (app) {
    app.use(proxy('/api1', {
      target: 'http://localhost:5000',
      // 控制服务器收到的请求头中Host的值，true：代理的host（此处为target值）
      changeOrigin: true,
      // 重写请求路径: http://localhost:3000/api1/xxx  -->  http://localhost:3000/xxx
      pathRewrite: {
        '^/api1': ''
      }
    }))
    app.use(proxy('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: {
        '^/api2': ''
      }
    }))
  }
```

#### 组件通信


```
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
```

##### 消息订阅与发布机制

```
  消息订阅与发布机制：用于组件之间的通信
    pubsub-js 库

    发布消息: PubSub.publish('subData', data)
    订阅消息: 
        this.token = PubSub.subscribe('subData', (_, data) => {
          this.setState({ subData: data })
        })
    取消订阅: （在组件卸载前）
        PubSub.unsubscribe(this.token)

```

##### redux

```
redux： 三大核心
    1、actions
    2、store   createStore(reducers)
    3、reducers  reducers(prevStore, actions)
  
  注意：redux只负责状态管理更新，不进行视图更新，需要用 store.subscribe(() => {}) 手动更新视图


    1、同步action   返回 一般对象 Object
    2、异步action   返回  function
        异步action，需要使用redux的中间件 applyMiddleware 方法，接收一个参数（redux-thunk库）
        createStore(reducters, applyMiddleware(thunk))


import { createStore, applyMiddleware } from 'redux'
import Reducers from './reducers';
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

redux:
    1、createStore： 创建一个store   
          createStore(allReducers, composeWithDevTools(applyMiddleware(reduxThunk)))

    2、applyMiddleware： 结合redux-thunk使用，用于支持异步action

    3、combineReducers： 合并多个reducer，接收一个对象参数  
          allReducers = combineReducers({ a: aReducer, b: bReducer})
```

##### react-redux

```
    1、 UI组件： 不能使用任何 redux 的 api， 只负责页面的呈现、交互等，用 this.props 访问状态

    2、 容器组件： 负责和 redux 通信，将结果交给 UI组件

    3、 容器组件的创建： 用 react-redux 的 connect 函数创建容器组件
          connect(mapStateToProps, mapDispatchToProps)(UI组件)
              mapStateToProps： 函数， 映射状态，返回值是一个 Object
              mapDispatchToProps： 函数， 映射操作状态的方法， 返回值是一个 Object
              connect 返回值也是一个函数，接收一个参数（UI组件）

    4、 容器组件的 store 用 props 传递给 UI组件

    5、 connect 函数会自动监测状态变化，更新视图（不用手动调用 store.subscribe() 更新视图）

    6、 Provider 组件：react-redux的组件，多个容器组件都需要传入 store 时， 可用 Provider 组件传入 store，并将容器组件放在 Provider 组件里


```



#### fetch

```
请求：
      1、 xhr（XMLHttpRequest）  axios 、  jquery的ajax 都是基于xhr的封装
              1. axios： 可在浏览器和nodejs中使用，基于promise的http库
      2、 fetch  关注分离
              优点：
                1. 基于promise
                2. 跨域的处理 设置mode: 'no-cors',
              缺点：
                a. 只对网络请求报错，对400，500都当做成功的请求，需要封装去处理
                b. 默认不会带cookie，需要添加配置项credentials。
                c. 不支持abort、不支持超时控制
```

```javascript
 fetch('/api1/getStudents', { mode: 'no-cors' })
      .then(res => {
        console.log('联系服务器成功了', res)
        // 网络请求报错400、500， 走这里
        return res.json()
      })
      .then(res => {
        console.log('请求数据成功了', res)
      })
      .catch(err => {
        console.log('请求失败了', err)
      })
```

#### react-router

##### 一般组件 和 路由组件 的区别

```
一般组件 和 路由组件：
    一般组件： 使用 withRouter(路由组件) 方法，可将一般组件具备路由组件特有的属性（history、location、match），返回一个新组件
        写法： <Home/>
        放在 components 目录下
        默认props 为 {}
    路由组件
        写法： <Route path='/home' component={Home} />
        放在 pages 目录下
        默认props: { history: {}, locatiton: {}, match: {} }
                history:
                    go: ƒ go(n)
                    goBack: ƒ goBack()
                    goForward: ƒ goForward()
                    push: ƒ push(path, state)
                    replace: ƒ replace(path, state)

                location:
                    hash: ""
                    pathname: "/home"
                    search: ""
                    state: undefined

                match:
                    params: {}
                    path: "/home"
                    url: "/home"

  react-router
    1、 web
    2、native
    3、anywhere

  react-router-dom
      1、 BrowserRouter
      2、 HashRouter
  
  注： 路由链接Link及注册路由Route 最外层需要用一个 BrowserRouter/HashRouter 包裹
```

##### 路由组件

```
路由组件：
    1、 BrowserRouter / HashRouter
    2、 Link / NavLink 路由链接， 默认push(栈)方式。  replace: true（替换方式）
    3、 Switch 一旦匹配到路由，就不再向下匹配
    4、 Route 注册路由，默认模糊匹配。 exact: true(严格匹配,多级路由下会匹配不到<Route path="/home/message" component={Message}/>)
    5、 Redirect 重定向


  多级路由下，刷新页面后，在index.html 引入的 public目录下资源访问路径问题：
  <Route path="/home/nav1" component={Home} />
      1、 使用 %PUBLIC_URL% 绝对路径 <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      2、 使用绝对路径   <link rel="apple-touch-icon" href="/logo192.png" />
      3、 使用 HashRouter 包裹最外层 #/
```


##### 路由组件参数传递

```
  1、 params参数
        参数传递： <Link to={`/detail/params/${id}/${title}`}>{ title }</Link>
        声明接收： <Route path='/detail/params/:id/:title' component={Params}/>
        接收：     this.props.match.params  { id: 1, title: xx }

  2、 search参数（query）
        参数传递： <Link to={`/detail/params?id=${id}&title=${title}`}>{ title }</Link>
        声明接收(无需声明)： <Route path='/detail/params' component={Params}/>
        接收：     this.props.location.search  ?id=001&title=message_1

  3、 state参数(不会在url上显示, 此state非组件的state, 刷新页面参数不会丢失)
        参数传递： <Link to={{ pathname: '/detail/params', state: {id, title} }}>{ title }</Link>
        声明接收(无需声明)： <Route path='/detail/params' component={Params}/>
        接收：     this.props.location.state  {id: 1, title: xx}
        注：state参数传递 最外层要用 BrowserRouter包裹， 不能用HashRouter
```


```javascript
import React, { Component, Suspense, lazy } from 'react'
import { NavLink, Link, BrowserRouter, HashRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';


// 懒加载
const Home = lazy(() => import('./Home'))
const Detail = lazy(() => import('./Detail'))

<NavLink activeClassName="auto-ative" to="/detail">Detail</NavLink>
```


##### 编程式路由导航

```
编程式路由导航： this.props.history对象上的API
      this.props.history.push(path, state)
      this.props.history.replace(path, state)
      this.props.history.goForward()
      this.props.history.goBack()
      this.props.history.go(n)  // 正数n 前进n步； 负数n 后退n步
```

##### BrowserRouter与HashRouter的区别

```
    1.底层原理不一样：
        BrowserRouter使用的是H5的history API，不兼容IE9及以下版本。
        HashRouter使用的是URL的哈希值。
    2.path表现形式不一样
        BrowserRouter的路径中没有#,例如：localhost:3000/demo/test
        HashRouter的路径包含#,例如：localhost:3000/#/demo/test
    3.刷新后对路由state参数的影响
        (1).BrowserRouter没有任何影响，因为state保存在history对象中。
        (2).HashRouter刷新后会导致路由state参数的丢失！！！
    4.备注：HashRouter可以用于解决一些路径错误相关的问题。(如：多级路由下，刷新页面后，在index.html 引入的 public目录下资源访问路径问题)
```

##### 路由懒加载

```jsx
使用 react 的 lazy 函数 和 Suspense 组件 结合使用
Suspense组件内部注册路由， fallback属性如果传入路由组件，则此路由组件不能使用懒加载

import React, { Component, Suspense, lazy } from 'react'
const Home = lazy(() => import('./Home.jsx'))
<Suspense fallback={<h3>Loading...</h3>}>
  <Switch>
    <Route path="/home" component={Home} />
    <Redirect to="/home" />
  </Switch>
</Suspense>
```



#### 扩展内容

##### Hooks

```
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
```


##### Fragment组件

```
Fragment组件：
      1、不会真正渲染dom元素，类似vue的 template
      2、只接收 key 属性，其他属性接收了也没有意义
      3、简写 <></> 不可以接收任务属性

    注： react 16开始，render 支持返回 数组
```

##### context

```
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
            <MyContext.Consumer>
             { value => { } }
            </MyContext.Consumer>

    注： 一般不用context，推荐使用 react-redux
```

##### renderProps

```
向组件内部动态传入带内容的结构(标签) 【类似vue的slot插槽】
    1、使用 children props： 通过组件标签体传入结构
        <A> <B>xxxx</B> </A>
        在A组件内使用 {this.props.children} 接收展示，缺点：B组件无法获取到A组件内的数据

    2、使用 render props: 通过组件标签属性传入结构，可以携带数据，一般用render函数属性
        <A render={ data => <B data={...data} /> } /> 
        在A组件内使用 {this.props.render(data)} 接收展示
```


##### 错误边界 Error Boundary

```
错误边界 Error Boundary：
    特点： 只能捕获后代组件生命周期产生的错误，渲染备用页面。不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误
    使用： getDerivedStateFromError 配合 componentDidCatch【需要在父组件处理】
    
    注： 只在生产环境生效，开发环境短暂生效后又会展示错误

  // 此钩子在后代组件出错时 就会触发
  static getDerivedStateFromError(error) {
    return {hasError: error}
  }
  // componentDidCatch 可用于错误上报
  // render 函数
  { this.state.hasError ? '网络繁忙，请稍后再试~' : <Child/> }
```