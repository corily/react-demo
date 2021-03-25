import { ADD_CAT } from "../constant";

const initState = [{id: '001', name: 'tom', age: 1}]

export default function addCat (preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case ADD_CAT:
      return [data, ...preState]      
    default:
      return preState
  }
}