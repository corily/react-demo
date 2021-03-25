import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import JsxDemo from './demo/01-jsx';
import ClassDemo from './demo/02-class';
import { MyClassComponent, MyFuncComponent } from './demo/03-component';
import StateDemo from './demo/04-state简写';
import PropsDemo from './demo/05-props';
import RefsDemo from './demo/06-refs';
import HighFuncDemo from './demo/07-高阶函数';
import LifeDemo from './demo/08-生命周期';
import DiffDemo from './demo/09-diffing';
import StyleModuleDemo from './demo/10-样式模块化';
import TodoList from './components/TodoList';
import ProxyDemo from './demo/11-proxy';
import PubSubDemo from './demo/12-消息订阅与发布机制/PubSub';
import FetchDemo from './demo/13-fetch';
import RouterDemo from './demo/14-react-router';
import ReduxDemo from './demo/15-redux状态管理';
import ReactReduxDemo from './demo/16-react-redux'
import ExtansionDemo from './demo/17-extansion'

import * as serviceWorker from './serviceWorker';

const data = [
  {
    name: 'tom',
    age: 18
  },
  {
    name: 'wee',
    age: 19
  },
  {
    name: 'vovo',
    age: 20
  }
]

const personInfo = { name: 'tom', age: 16 }

ReactDOM.render(
  // <React.StrictMode>
  // </React.StrictMode>,
  <div>
    {/* <App /> */}
    <JsxDemo /><br/>
    <ClassDemo /><br/>
    <MyClassComponent /><br/>
    <MyFuncComponent name='yoyo'/><br/>
    <StateDemo /><br/>
    {/* <PropsDemo name='tom' age={18} data={data}/> */}
    <PropsDemo {...personInfo} data={data}/><br/>
    <RefsDemo />
    <br/>
    <HighFuncDemo /><br/>
    <LifeDemo/><br/>
    <DiffDemo/><br/>
    <StyleModuleDemo/>
    <br/>
    <TodoList/>
    <br/>
    <ProxyDemo/>
    <br/>
    <PubSubDemo/>
    <br/>
    <FetchDemo/>
    <br/>
    <RouterDemo>【slot content】</RouterDemo>
    <br/>
    <ReduxDemo/>
    <br/>
    <ReactReduxDemo/>
    <br/>
    <ExtansionDemo/>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
