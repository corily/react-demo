import React, { Component } from 'react';
import PublicCom from './PublicComponent';
import SubscribeCom from './SubscribeComponent';

/*
  消息订阅与发布机制：用于组件之间的通信
    pubsub-js 库

    PublicCom组件用于发布消息
    SubscribeCom组件用于订阅消息

    在组件卸载前，取消订阅
*/

class PubSubDemo extends Component {
  render() {
    return (
      <div>
        <p>12 - 消息订阅与发布 pubsub</p>
        <PublicCom></PublicCom>
        <SubscribeCom></SubscribeCom>
      </div>
    );
  }
}

export default PubSubDemo;