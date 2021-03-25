import { combineReducers } from 'redux'

import count from './count'
import cats from './cat'

// 合并多个reducer
export default combineReducers({
  count,
  cats
})