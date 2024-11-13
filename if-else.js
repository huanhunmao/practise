// 减少使用 if-else 

// 1、对象多态
// class  Animal{
//     speak(){}
// }

// class Dog extends Animal{
//     speak(){
//         return 'Wang'
//     }
// }

// class Cat extends Animal{
//     speak(){
//         return 'Miao'
//     }
// }

// const animals = [new Dog(), new Cat()]
// animals.forEach(animal => console.log(animal.speak()))


// 2 策略 
// const strategies = {
//     strategyA: () => 'strategyA',
//     strategyB: () => 'strategyB'
// }

// function executeStrategy(name){
//     return strategies[name]()
// }

// console.log(executeStrategy('strategyA')) // strategyA


// 3 查找表 
// const actions = {
//     'actions1' : ()  => console.log('action1'),
//     'actions2' : ()  => console.log('action2'),
// }

// const action = actions['actions2']
// if(action) action() // action2

//4 三木运算
// const result = condition ? 'Case a' : 'Case b'


// 5 提前返回
function checkValue(value){
    if(value < 0) return 'less than 0'
    if(value === 0) return 'equal 0'
    return 'more than 0'
}