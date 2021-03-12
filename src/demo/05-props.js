import React from 'react'
// import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// props:  只读   props.children 属性可接收组件标签体内容
export default class PropsDemo extends React.Component {

  // 如果需要在构造器中用 this.props 访问props属性，就必须要接收props参数，并传递给super
  // 如果props、state都使用简写方式，且不用再构造器访问 this.props，可以不用写构造器
  // constructor (props) {
  //   super(props)
  //   console.log(this.props)
  // }


  // 简写props
  // 给类自身加属性 或 方法，用关键词 static，静态属性/方法 ;通过类本身调用方法
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
  }
  static defaultProps = {
    age: 18
  }

  // 直接赋值，没有static，给类的实例对象加属性
  data = [1, 2, 3]

  render () {
    console.log(333, this)
    const { name, age, data } = this.props
    return (
      <div>
        <p>05 - props讲解</p>
        <ul>
          <li>姓名：{ name }</li>
          <li>年龄：{ age }</li>
        </ul>
        {
          data.map((v, i) => {
            return (
              <ul key={i}>
                <li>姓名：{ v.name }</li>
                <li>年龄：{ v.age }</li>
              </ul>
            )
          })
        }
      </div>
    )
  }
}

// 设置props的属性规则
// https://react.html.cn/docs/typechecking-with-proptypes.html
/*
    PropTypes类型：
        1、 array
        2、 bool
        3、 func
        4、 number
        5、 string
        6、 object
        ...
*/

// 给类加属性propTypes  (简写方式： 在类中用static关键字加属性)
// PropsDemo.propTypes = {
//   // name: React.PropTypes.string,  // react v15.5 开始弃用这种方法，（集成在react库中，体积太大了）
//   name: PropTypes.string.isRequired,  // react v16.xxx 使用这种方法
//   age: PropTypes.number,
//   // speak: PropTypes.func, // function 为关键字不能用
// }

// // 设置props属性默认值
// PropsDemo.defaultProps = {
//   age: 18
// }


// const data = [
//   {
//     name: 'wee',
//     age: 19
//   },
//   {
//     name: 'vovo',
//     age: 20
//   }
// ]

// const personInfo = { name: 'tom', age: 16 }

// props 的传递使用
// ReactDOM.render(
//   <div>
//     {/* <PropsDemo name='tom' age={18} data={data}/> */}
//     <PropsDemo {...personInfo} data={data}/>
//   </div>,
//   document.getElementById('test')
// )