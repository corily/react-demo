// 扩展内容
import React, { Component } from 'react'
import SetStateDemo from './1_setState'
import HooksDemo from './2_hooks'
import FragmentDemo from './3_fragment'
import ContextDemo from './4_context'
import PureComponentDemo from './5_pureComponent'
import RenderPropsDemo from './6_renderProps'
import ErrorBoundaryDemo from './7_ErrorBoundary'

export default class ExtansionDemo extends Component {

  render() {
    return (
      <div>
        <p>17 - 扩展内容</p>
        <div style={{marginLeft: '16px'}}>
          <SetStateDemo/>
          <HooksDemo/>
          <FragmentDemo/>
          <ContextDemo/>
          <br/>
          <PureComponentDemo/>
          <br/>
          <RenderPropsDemo/>
          <br/>
          <ErrorBoundaryDemo/>
        </div>
      </div>
    )
  }
}
