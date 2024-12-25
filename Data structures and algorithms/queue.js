
/**
 * 队列  先进先出
*/

const queue = []
queue.push('apple')
queue.push('banana')
queue.push('cherry')
queue.push('date')

while(queue.length){
    // 单独访问队头元素 不出队
    const top = queue[0]
    console.log(top, '取出');
    queue.shift()
}