import { createStore, applyMiddleware } from 'redux'

// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

import reducer from './reducers'

import { composeWithDevTools } from 'redux-devtools-extension'



// export default createStore(reducer, applyMiddleware(thunk))

// 使用redux-devtools工具
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))