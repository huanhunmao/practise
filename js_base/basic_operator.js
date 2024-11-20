
let s = 'my' + 'like'
console.log(s); // mylike

console.log(2+ '10'); // 210

// 注意这种
console.log(2 + 2 + '1'); // 结果为 41 而不是 221
console.log('1' + 2 + 2); // 结果为 122 而不是 14


// 这种比较常规 
console.log(6 - '2'); // 4
console.log('6' / '2'); // 3


// 会转为数字 
console.log(+true); // 1
console.log(+'');  // 0

