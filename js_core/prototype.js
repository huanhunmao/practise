
// 先查找对象自身属性，如果不存在，则沿着原型链向上查找
function Person(name){
    this.name = name;
}

Person.prototype.sayHello = function(){
    console.log(`Hello, my name is ${this.name}`);
}

const ppx = new Person('ppx');
ppx.sayHello(); // Hello, my name is ppx