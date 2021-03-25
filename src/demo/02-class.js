import React from 'react'

/*
this 在严格模式（use strict）下的指向
1、 全局作用下 this  -> window
2、 函数里的 this ->  undefined
3、 对象的函数（方法）的 this  -> 调用函数的对象实例
*/


/**
 *   class 类
 *      1、 类中的方法默认开启局部的严格模式 'use strict'
 *      2、 类中可用直接写赋值语句 a = 1 （某个属性是固定值时使用）
 */

export default class ClassDemo extends React.Component {
  // 构造器方法: 对实例进行一些初始化操作时，才写constructor
  // 构造器中的 this 是  类的实例对象
  // extends继承 并且 constructor有参数 ，要先调用 supper()
  constructor (name, age) {
    super()
    this.name = name
    this.age = age
  }
  // 含义： 给实例对象添加一个a属性，并赋值 1
  a = 1

  // 一般方法 ： 放在 类的原型对象上 __proto__
  speak () {
    console.log(`名字：${this.name}, 年龄：${this.age}`)
  }

  render () {
    return <p>02 - class 讲解</p>
  }

}

const a1 = new ClassDemo('tom', 18)
const a2 = new ClassDemo('looy', 20)
console.log(a1) // 实例对象
console.log(a1.__proto__) // 类的原型对象 __proto__
a1.speak()
a2.speak()
a2.speak.call({name: 'vovo', age: 16})


// call 、bind 、 apply 这三个函数的第一个参数都是 this 的指向对象
// call: call(this对象，arg1， arg2，arg3...)       call  参数逐个加
// bind： 返回一个新函数，必须再调用，参数和 call 一样  bind(this对象, arg1, arg2)()

// apply: apply(this对象，[arg1， arg2，arg3...])   apply 参数放在 [] 数组里

// const name = '小王'
// const age = 17

// const obj = {
//   name: '小张',
//   objAge: this.age,
//   myFun: (fm, t) => {
//     console.log(`${this.name} 年龄 ${this.age}， 来自${fm} 去往${t}`)
//   }
// }
// const db = {
//   name: '德玛',
//   age: 99
// }


// obj.myFun.call(db)　　　　// 德玛年龄 99
// obj.myFun.apply(db);　　　 // 德玛年龄 99
// obj.myFun.bind(db)();　　　// 德玛年龄 99


// obj.myFun.call(db,'成都','上海');　　　　 // 德玛 年龄 99  来自 成都去往上海
// obj.myFun.apply(db,['成都','上海']);      // 德玛 年龄 99  来自 成都去往上海  
// obj.myFun.bind(db,'成都','上海')();       // 德玛 年龄 99  来自 成都去往上海
// // obj.myFun.bind(db,['成都','上海'])();　　 // 德玛 年龄 99  来自 成都, 上海去往 undefined
