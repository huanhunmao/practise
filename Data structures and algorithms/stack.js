/**
 * 栈  后进先出
*/

const stack = []

stack.push('apple')
stack.push('banana')
stack.push('cherry')
stack.push('date')

while(stack.length){
    const top = stack[stack.length - 1]
    console.log('现在取出的是，', top);
    // 现在取出的是， date
    // 现在取出的是， cherry
    // 现在取出的是， banana
    // 现在取出的是， apple
    stack.pop()
}