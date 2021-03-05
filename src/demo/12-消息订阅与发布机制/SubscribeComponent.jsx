import React, { Component } from 'react';
import PubSub from 'pubsub-js';

class SubscribeComponent extends Component {
  state = {
    subData: ''
  }

  // 挂载组件，订阅消息
  componentDidMount () {
    this.token = PubSub.subscribe('subData', (_, data) => {
      this.setState({ subData: data })
    })
  }

  // 卸载组件前，取消订阅
  componentWillUnmount () {
    console.log('取消订阅~');
    PubSub.unsubscribe(this.token)
  }

  render() {
    return (
      <div>
        这是订阅的消息：{ this.state.subData }
      </div>
    );
  }
}

export default SubscribeComponent;