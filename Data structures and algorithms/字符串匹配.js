

const WordDictionary = function (){
	this.words = {}
}

WordDictionary.prototype.addWord = function (word){
	if(!this.words[word.length]){
		this.words[word.length] = [word]
	}else{
		this.words[word.length].push(word)
	}
}


WordDictionary.prototype.search = function(word){
	if(!this.words[word.length]) return false 
	
	const len = word.length 
	
	if(!word.includes('.')){
		return this.words[word.length].includes(word)
	}
	
	const reg = new RegExp(word)
	
	return this.words[len].some(item => reg.test(item))
}

//
const word = new WordDictionary()
console.log('word',word);
word.addWord('bad')
word.addWord('good')

console.log(word.search('bad'));
console.log(word.search('g..d'));
console.log(word.search('bab'));