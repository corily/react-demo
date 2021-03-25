/*
    向组件内部动态传入带内容的结构(标签) 【类似vue的slot插槽】
        1、使用 children props： 通过组件标签体传入结构
            <A> <B>xxxx</B> </A>
            在A组件内使用 {this.props.children} 接收展示，缺点：B组件无法获取到A组件内的数据

        2、使用 render props: 通过组件标签属性传入结构，可以携带数据，一般用render函数属性
            <A render={ data => <B data={...data} /> } /> 
            在A组件内使用 {this.props.render(data)} 接收展示

*/



import React, { PureComponent } from 'react'

export default class RenderPropsDemo extends PureComponent {

  render() {
    return (
      <div className='parent'>
        <p>17-6 render props 类似 vue的slot插槽</p>
        <h3>A组件</h3>

        {/* 
        <B>
          <C/>
        </B> 
        */}

        <p>{'<B render={ data => <C {...data}/> }/>'}</p>
        <B render={ data => <C {...data}/> }/>
      </div>
    )
  }
}


class B extends PureComponent {

  state = {name: 'tom', age: 8}

  render() {
    console.log('B:', this.props)
    const {name, age} = this.state
    return (
      <div className='child'>
        <h3>B组件</h3>
        <p>state：name: {name} --- age: {age}</p>

        {/* children props */}
        {/* {this.props.children} */}

        {/* render props */}
        { this.props.render(this.state) }

      </div>
    )
  }
}

class C extends PureComponent {
  render() {
    console.log('@ C:' , this.props)
    const { name, age } = this.props
    return (
      <div className='grandson'>
        <h3>C组件</h3>
        <h5>从B组件接收到的数据：名字： {name} ------ 年龄：{age}</h5>
      </div>
    )
  }
}
