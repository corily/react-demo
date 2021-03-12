import React, { Component } from 'react';

class Home extends Component {
  render() {
    console.log('路由组件的props: ', this.props);
    return (
      <div>
        Home content
      </div>
    );
  }
}

export default Home;