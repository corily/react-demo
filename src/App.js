import React from 'react';
import './App.css';

/*
  jsx语法:
  1、 class  -->  className
  2、 style={{key: value}}
  3、 标签首字母： 
      首字母小写，自动转换成html中的标签； 
      首字母大写，自动找react组件
  4、 标签中混入 【表达式】 时用 {}   表达式有返回值
  5、 只有一个跟标签
  6、标签必须闭合
*/

/*
  1、 函数式组件
  2、 类式组件

*/

function App() {
  const data = ['react', 'vue', 'angular']
  return (
    <div className='title'>
      <span>hello react</span>
      <p style={{ color: '#f00', fontSize: '60px' }}>content</p>
      <ul>
        { data.map(v => <li key={v}>{v}</li>) }
      </ul>
    </div>
  );
}


class App2 {
  // 构造器方法
  constructor (data) {
    // 构造器中的 this 是  类的实例对象
    this.data = data
  }

  // 一般方法 ： 放在 类的原型对象上 __proto__
  render () {
    // const data = ['react', 'vue', 'angular']
    return (
      <div className='title'>
        <span>hello react</span>
        <p style={{ color: '#f00', fontSize: '60px' }}>content</p>
        <ul>
          { this.data.map(v => <li key={v}>{v}</li>) }
        </ul>
      </div>
    );
  }

}

const a1 = new App2(['react', 'vue', 'angular'])
console.log(a1) // 实例对象
console.log(a1.__proto__) // 类的原型对象 __proto__

export default App;
