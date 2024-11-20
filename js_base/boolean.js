

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean('hello')); // true

// 注意⚠️下面这几个 尤其是 最后两个  非空字符串都是 true
console.log(Boolean('')); // false
console.log(Boolean('0')); // true
console.log(Boolean(' ')); // true


// false 值 ，其他都是 true 值
0, null, undefined, NaN, '', false