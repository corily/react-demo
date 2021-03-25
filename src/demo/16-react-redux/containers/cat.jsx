import React, { Component } from 'react';

import { connect } from 'react-redux'

import { nanoid } from 'nanoid'
import { addCat } from '../redux/actions/cat';

class CatUI extends Component {
  addCat = () => {
    const name = this.nameRef.value
    const age = this.ageRef.value * 1
    this.props.addCat({id: nanoid(), name, age})
    this.nameRef.value = ''
    this.ageRef.value = ''
  }

  render() {
    return (
      <div>
        <input ref={c => this.nameRef = c} type="text"/>
        <input ref={c => this.ageRef = c} type="text"/>
        <button onClick={this.addCat}>加一只小猫</button>
        <span>所求之和： {this.props.sum}</span>
        <br/>
        <ul>
          {
            this.props.cats.map(v => <li key={v.id}>名称：{v.name} ---- 年龄：{v.age}</li>)
          }
        </ul>
      </div>
    );
  }
}


export default connect(
  state => ({cats: state.cats, sum: state.count}),
  { addCat }
)(CatUI)
