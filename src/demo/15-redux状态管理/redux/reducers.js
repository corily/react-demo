import { INCREMENT, DECREMENT } from './constant'

// prevStore：首次调用时，为undefined
export default function (prevStore = 0, actions) {
  const { data, type } = actions
  switch (type) {
    case INCREMENT:
      return prevStore + data
    case DECREMENT:
      return prevStore - data
    // 初始化
    default:
      return prevStore
  }
}
