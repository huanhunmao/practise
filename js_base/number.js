console.log(Number('123')); // 123
console.log(Number('123z')); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0

// 下面这几个会被删除掉 
console.log('\t');
console.log('\n');
console.log('');
console.log(' ');