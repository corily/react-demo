import React, { Component } from 'react';
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';

class Header extends Component {

  static propTypes = {
    onGetTaskValue: PropTypes.func.isRequired
  }

  addTask = (e) => {
    const { keyCode, target } = e
    if (keyCode === 13) {
      console.log(target.value);
      this.props.onGetTaskValue({id: nanoid(), name: target.value, checked: false})
      target.value = ''
    }
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.addTask} type="text" placeholder="输入任务，然后回车确认"/>
      </div>
    );
  }
}

export default Header;