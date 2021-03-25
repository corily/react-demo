/*
  jsx语法:
  1、 class  -->  className
  2、 style={{key: value}}
  3、 标签首字母： 
      首字母小写，自动转换成html中的标签； 
      首字母大写，自动找react组件
  4、 标签中混入 【表达式】 时用 {}   表达式有返回值
  5、 只有一个根标签
  6、标签必须闭合
*/

import React from 'react'

export default function JsxDemo() {
  const data = ['react', 'vue', 'angular']
  return (
    <div className='title'>
      <span>hello react</span>
      <p style={{ color: '#f00', fontSize: '22px' }}>01 - jsx语法糖</p>
      <ul>
        { data.map(v => <li key={v}>{v}</li>) }
      </ul>
    </div>
  );
}
