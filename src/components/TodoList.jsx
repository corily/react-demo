import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import '../css/todoList.scss'

import React, { Component } from 'react';

class TodoList extends Component {
  state = {
    taskList: [
      {id: '001', name: '吃饭', checked: true },
      {id: '002', name: '睡觉', checked: false },
      {id: '003', name: '打豆豆', checked: true },
    ]
  }

  // 父子组件通信：父组件传递一个值为function的属性xxx，在子组件中调用这个function(this.props.xxx(data))，并传入参数，即可向父组件传递数据（数据为参数）
  getTaskValue = (obj) => {
    this.setState({ taskList: [obj, ...this.state.taskList] })
  }

  // 是否勾选
  checkedChange = ({ id, checked }) => {
    const { taskList } = this.state
    const newTaskList = taskList.map(v => {
      if (v.id === id) v.checked = checked
      return v
    })
    this.setState({ taskList: newTaskList })
  }

  // 清除已完成的任务
  getNewTaskList = (data) => {
    this.setState({ taskList: data })
  }

  render() {
    const { taskList } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header onGetTaskValue={this.getTaskValue}></Header>
          <Content data={taskList} onChange={this.checkedChange} onDelete={this.getNewTaskList}></Content>
          <Footer data={taskList} onDelFinishedTask={this.getNewTaskList} onAllSelect={this.getNewTaskList}></Footer>
        </div>
      </div>
    );
  }
}

export default TodoList;