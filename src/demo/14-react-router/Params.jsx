import React, { Component } from 'react';
// import Qs from 'querystring';

class Params extends Component {
  state = {
    data: [
      { id: '001', title: 'message_1', content: 'message content 111' },
      { id: '002', title: 'message_2', content: 'message content 222' },
      { id: '003', title: 'message_3', content: 'message content 333' },
    ]
  }
  render() {
    const { data } = this.state

    // params参数
    // const { id, title } = this.props.match.params

    // search参数:  ?id=001&title=message_1
    // const { search } = this.props.location
    // const { id, title } = Qs.parse(search.slice(1))

    // state参数
    const { id, title } = this.props.location.state || {}

    console.log('路由参数接收props：', this.props);
    const obj = data.find(v => v.id === id) || {}

    return (
      <div>
        <p>ID: { id }</p>
        <p>TITLE: { title }</p>
        <p>CONTENT: { obj.content }</p>
      </div>
    );
  }
}

export default Params;