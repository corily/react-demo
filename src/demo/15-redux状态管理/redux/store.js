import { createStore, applyMiddleware } from 'redux'
import Reducers from './reducers';
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'


export default createStore(Reducers, applyMiddleware(thunk))