import React, { Component } from 'react';

class Footer extends Component {
  
  delFinishedTask = () => {
    const { data } = this.props
    const newData = data.filter(({ checked }) => !checked)
    this.props.onDelFinishedTask(newData)
  }

  allSelect =({target}) => {
    const data = this.props.data.map(v => {
      v.checked = target.checked
      return v
    })
    this.props.onAllSelect(data)
  }

  render() {
    const { data } = this.props
    const count = data.reduce((pre, {checked}) => pre + (checked ? 1 : 0), 0)
    const all = data.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={all === count && all !== 0} onChange={this.allSelect}/>
        </label>
        <span>
          <span>已完成{count}</span> / 全部{all}
        </span>
        <button className="btn btn-danger" onClick={this.delFinishedTask}>清除已完成任务</button>
      </div>
    );
  }
}

export default Footer;