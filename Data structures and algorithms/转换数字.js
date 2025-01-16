// 入参是一个字符串
// const myAtoi = function(str) {
//     // 编写正则表达式
//     const reg = /\s*([-\+]?[0-9]*).*/
//     // 得到捕获组
//     const groups = str.match(reg)
//     // 计算最大值
//     const max = Math.pow(2,31) - 1
//     // 计算最小值
//     const min = -max - 1
//     // targetNum 用于存储转化出来的数字
//     let targetNum = 0
//     // 如果匹配成功
//     if(groups) {
//         // 尝试转化捕获到的结构
//         targetNum = +groups[1]
//         // 注意，即便成功，也可能出现非数字的情况，比如单一个'+'
//         if(isNaN(targetNum)) {
//             // 不能进行有效的转换时，请返回 0
//             targetNum = 0
//         }
//     }
//     // 卡口判断
//     if(targetNum > max) {
//         return max
//     } else if( targetNum < min) {
//         return min
//     }
//     // 返回转换结果
//     return targetNum
// };

const myAtoi = function(str){
	const reg = /\s*([-\+]?[0-9]*).*/
	
	const groups = str.match(reg)
	const max = Math.pow(2, 31) - 1
	const min = -max - 1
	
	let targetNum = 0
	
	if(groups){
		targetNum = +groups[1]
		
		if(isNaN(targetNum)){
			targetNum = 0
		}
	}
	
	if(targetNum > max){
		return max
	}else if(targetNum < min){
		return min
	}
	
	return targetNum
}


console.log(myAtoi('42')); // 42
console.log(myAtoi('4193 with words'));
console.log(myAtoi('-91283472332'));