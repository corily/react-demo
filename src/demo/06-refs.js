import React from 'react'


/*
  refs使用方式 (勿过度使用 Refs)
    1、 string类型的   ref='input'
    2、 回调refs
        a. 内联函数   ref={c => this.input1 = c}
        b. class式绑定函数 ref={this.saveInput1}   saveInput1 = c => this.input1 = c
    3、 React.createRef()  react推荐使用  调用一次就生成一个ref，多个ref，要调用多次  this.input1.current.value

*/

// refs 多数是使用回调式内联函数
export default class RefsDemo extends React.Component {
  refInput4 = React.createRef()
  refInput5 = React.createRef()
  render () {
    return (
      <div>
        <p>06 - refs讲解</p>

        <input ref="input1" onBlur={this.showData} type="text" placeholder="string类型的ref，失去焦点提示内容"/>

        {/* 回调ref  内联函数绑定ref，在组件更新时，会调用两次改内联函数 */}
        <input style={{margin: '0 20px'}} ref={cNode => this.input2 = cNode} onBlur={this.showData2} type="text" placeholder="回调ref(内联函数)，失去焦点提示内容"/>


        <input ref={this.saveInput3} onBlur={this.showData3} type="text" placeholder="回调ref，失去焦点提示内容"/>

        <br/>
        <br/>
        <input ref={this.refInput4} onBlur={this.showData4} type="text" placeholder="createRef，失去焦点提示内容"/>

        <input style={{margin: '0 20px'}}  ref={this.refInput5} onBlur={this.showData5} type="text" placeholder="createRef，失去焦点提示内容"/>

        {/* 
          react 的事件处理
              格式：onXxxx={}   
              自定义事件，通过事件委托处理；
              通过 event.target 得到发生时间的 dom 元素对象 
        */}
        <input onBlur={this.showData6} type="text" placeholder="事件处理，失去焦点提示内容"/>

      </div>
    )
  }

  showData = () => {
    console.log('string类型的ref: ', this.refs.input1)
    alert(this.refs.input1.value)
  }

  showData2 = () => {
    console.log('内联函数回调ref: ', this.input2)
    alert(this.input2.value)
  }

  saveInput3 = (currnentNode) => {
    this.input3 = currnentNode
  }
  showData3 = () => {
    console.log('回调ref: ', this.input3)
    alert(this.input3.value)
  }

  showData4 = () => {
    console.log('createRef: ', this.refInput4)
    alert(this.refInput4.current.value)
  }

  showData5 = () => {
    console.log('createRef: ', this.refInput5)
    alert(this.refInput5.current.value)
  }

  showData6 = (event) => {
    console.log('event: ', event.target.value)
    alert(event.target.value)
  }
}
