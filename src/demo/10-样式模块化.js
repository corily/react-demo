import React, { Component } from 'react'
// 普通样式文件引入
import '../css/demo10.css'
// 样式模块化文件引入 
import css from '../css/demo10.module.css'
import '../css/demo10.scss'

/*
    样式模块化文件名格式： xxx.module.css
    引入： import xxx from 'xxx'
    使用： className={xxx.className}


    开发中可用css预处理器 sass/less 来解决样式冲突问题 (react中默认使用sass)
*/

export default class StyleModuleDemo extends Component {
  render () {
    return (
      <div>
        <p className='bg'>10 - 样式模块化  普通样式使用</p>
        <p className={css.bg}>10 - 样式模块化  模块化样式使用</p>
        <div className='demo10'>
          <p className='bg'>10 - 样式模块化  sass</p>
        </div>
      </div>
    )
  }
}
