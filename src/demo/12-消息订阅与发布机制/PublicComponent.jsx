import React, { Component } from 'react';
import PubSub from 'pubsub-js';

class PublicComponent extends Component {

  publicData = () => {
    PubSub.publish('subData', this.inputRef.value)
  }

  render() {
    return (
      <div>
        <input type="text" ref={c => this.inputRef = c}/>
        <button onClick={this.publicData}>发布消息</button>
      </div>
    );
  }
}

export default PublicComponent;