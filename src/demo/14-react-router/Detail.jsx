import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Params from './Params';

class Detail extends Component {
  state = {
    data: [
      { id: '001', title: 'message_1' },
      { id: '002', title: 'message_2' },
      { id: '003', title: 'message_3' },
    ]
  }

  // 编程式路由导航
  pushShow = (id, title) => {
    // history.push(path, state)

    // params方式
    this.props.history.push(`/detail/params/${id}/${title}`)

    // search方式
    this.props.history.push(`/detail/params?id=${id}&title=${title}`)

    // state方式
    this.props.history.push(`/detail/params`, {id, title})
  }

  // 编程式路由导航
  replaceShow = (id, title) => {
    // history.replace(path, state)
    
    // params方式
    this.props.history.replace(`/detail/params/${id}/${title}`)

    // search方式
    this.props.history.replace(`/detail/params?id=${id}&title=${title}`)

    // state方式
    this.props.history.replace(`/detail/params`, {id, title})
  }

  arrowShow = () => {
    this.props.history.goForward()
    // this.props.history.goBack()
    // go(n): 正数n 前进n步； 负数n 后退n步
    // this.props.history.go(1)
  }


  render() {
    const { data } = this.state
    return (
      <div>
        <ul>
          {
            data.map(v => {
              return (
                <li key={v.id}>
                  {/* 传递params参数方式 */}
                  {/* <Link to={`/detail/params/${v.id}/${v.title}`}>{ v.title }</Link> */}

                  {/* 传递search参数方式 */}
                  {/* <Link to={`/detail/params?id=${v.id}&title=${v.title}`}>{ v.title }</Link> */}

                  {/* 传递state参数方式 */}
                  {/* pathname: '/detail/params', state: {id: v.id, title: v.title} */}
                  <Link to={{pathname: '/detail/params', state: {id: v.id, title: v.title}}}>{ v.title }</Link>
                </li>
              )
            })
          }
        </ul>
        <hr/>
        <Switch>
          {/* 声明接收params参数方式,  Params组件内用 this.props.match.params 接收参数*/}
          {/* <Route path='/detail/params/:id/:title' component={Params}/> */}

          {/* search参数方式: 无需声明接收。 Params组件内用 this.props.location.search 接收参数 */}
          {/* <Route path='/detail/params' component={Params}/> */}

          {/* state参数方式: 无需声明接收。 Params组件内用 this.props.location.state 接收参数 */}
          <Route path='/detail/params' component={Params}/>
        </Switch>
      </div>
    );
  }
}

export default Detail;