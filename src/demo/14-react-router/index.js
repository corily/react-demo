import React, { Component } from 'react'
import { NavLink, Link, BrowserRouter, HashRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Home from './Home'
import Detail from './Detail'

/*
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
*/

/*
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
*/

/*
    路由组件参数传递
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

*/

/*
    编程式路由导航： this.props.history对象上的API
      this.props.history.push(path, state)
      this.props.history.replace(path, state)
      this.props.history.goForward()
      this.props.history.goBack()
      this.props.history.go(n)  // 正数n 前进n步； 负数n 后退n步
*/

/*
    BrowserRouter与HashRouter的区别
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

*/
export default class RouterDemo extends Component {
  render() {
    console.log('router demo props: ', this.props)
    return (
      <div>
        <p>14 - react router {this.props.children}</p>
        {/* <HashRouter> */}
        <BrowserRouter>
          <div>
            {/* 编写路由链接 */}
            {/* <Link to="/home" style={{marginRight: '20px'}}>Home</Link>
            <Link to="/detail">Detail</Link>
            <Link replace to="/detail">Detail</Link> */}
            <NavLink activeClassName="auto-ative" to="/home" style={{marginRight: '20px'}}>Home</NavLink>
            <NavLink activeClassName="auto-ative" to="/detail">Detail</NavLink>

          </div>
          <div>
            {/* 注册路由 */}
            <Switch>
              {/* <Route exact path="/home" component={Home} /> */}
              <Route path="/home" component={Home} />
              <Route path="/detail" component={Detail} />
              <Redirect to="/home" />
            </Switch>
          </div>
        </BrowserRouter>
        {/* </HashRouter> */}
      </div>
    )
  }
}
