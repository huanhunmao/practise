

// 直接使用 api
const isPalindrome = function(str){
	const reversedStr = str.split('').reverse().join('')
	
	return reversedStr === str
}

console.log(isPalindrome('ooccbbccoo'));



// 使用 对称性质 
const isPalindrome2 = function(str){
	const len = str.length 
	
	for(let i = 0; i < len/2; i++){
		if(str[i] !== str[len-i-1]){
			return false
		}
	}
	
	return true 
}


console.log(isPalindrome2('ooccbbccoo'));


