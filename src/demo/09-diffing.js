import React from 'react'

/*
	1. 虚拟DOM中key的作用：
      1). 简单的说: key是虚拟DOM对象的标识, 在更新显示时key起着极其重要的作用。

      2). 详细的说: 当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】, 
                    随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：

          a. 旧虚拟DOM中找到了与新虚拟DOM相同的key：
                (1).若虚拟DOM中内容没变, 直接使用之前的真实DOM
                (2).若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM

          b. 旧虚拟DOM中未找到与新虚拟DOM相同的key
                根据数据创建新的真实DOM，随后渲染到到页面
              
  2. 用index作为key可能会引发的问题：
          1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作:
                  会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。

          2. 如果结构中还包含输入类的DOM：
                  会产生错误DOM更新 ==> 界面有问题。

*/

/*
  使用index索引值作为key

			初始数据：
					{id:1,name:'小张',age:18},
					{id:2,name:'小李',age:19},
			初始的虚拟DOM：
					<li key=0>小张---18<input type="text"/></li>  input里有数据123
					<li key=1>小李---19<input type="text"/></li>

			更新后的数据：
					{id:3,name:'小王',age:20},
					{id:1,name:'小张',age:18},
					{id:2,name:'小李',age:19},
			更新数据后的虚拟DOM：
					<li key=0>小王---20<input type="text"/></li>  重新生成dom，input复用，input数据为123
					<li key=1>小张---18<input type="text"/></li>  重新生成dom
					<li key=2>小李---19<input type="text"/></li>  没有对应key，生成新dom

	-----------------------------------------------------------------

	使用id唯一标识作为key

			初始数据：
					{id:1,name:'小张',age:18},
					{id:2,name:'小李',age:19},
			初始的虚拟DOM：
					<li key=1>小张---18<input type="text"/></li>
					<li key=2>小李---19<input type="text"/></li>

			更新后的数据：
					{id:3,name:'小王',age:20},
					{id:1,name:'小张',age:18},
					{id:2,name:'小李',age:19},
			更新数据后的虚拟DOM：
					<li key=3>小王---20<input type="text"/></li>  没有对应key，生成新dom
					<li key=1>小张---18<input type="text"/></li>
					<li key=2>小李---19<input type="text"/></li>
*/

export default class DiffDemo extends React.Component {

  state = {
    data: [
      {id: 1, name: '小张', age: 18},
      {id: 2, name: '小李', age: 19},
    ]
  }

  add = () => {
    const { data } = this.state
    const addData = {id: data.length + 1, name: '小王', age: 20}
    this.setState({data: [addData, ...data]})
  }

  render () {
    const { data } = this.state
    return (
      <div>
        <p>09 - diff算法</p>
        <button onClick={this.add}>添加一个数据</button>
        <p>使用index（索引值）作为key</p>
        <ul>
          {
            data.map((v, i) => {
              return (
                <li key={i}>
                  {v.name} --- {v.age}
                  <input type='text'/>
                </li>
              )
            })
          }
        </ul>
        <hr/>
        <p>使用id作为key</p>
        <ul>
          {
            data.map(v => {
              return (
                <li key={v.id}>
                  {v.name} --- {v.age}
                  <input type='text'/>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}