import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Content extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  }
  static defaultProps = {
    data: []
  }

  render() {
    const { data } = this.props
    return (
      <ul className="todo-main">
        {
          data.map(v => {
            return (
              <li key={v.id}>
                <label>
                  <input type="checkbox" checked={v.checked} onChange={this.change(v)}/>
                  <span>{v.name}</span>
                </label>
                <button className="btn btn-danger btn-del" onClick={this.delTask(v.id)}>删除</button>
              </li>
            )
          })
        }
      </ul>
    );
  }

  // 勾选checkbox
  change = (item) => {
    return (e) => this.props.onChange({...item, checked: e.target.checked})
  }

  // 删除
  delTask = (delId) => {
    return () => {
      const { data } = this.props
      const newData = data.filter(({id}) => id !== delId)
      this.props.onDelete(newData)
    }
  }
}

export default Content;