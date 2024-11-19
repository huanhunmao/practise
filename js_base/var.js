// 0
if (true) {
    var test = true; 
  }
  
  console.log(test); // true  var 没有块作用域  这里相当于全局变量


// var 有函数作用域
function sayHi() {
    if (true) {
      var phrase = "Hello";
    }
  
    console.log(phrase); // Hello
  }
  
  sayHi();
//   console.log(phrase);  // 报错 

// 1
function sayHi() {
    phrase = "Hello";
  
    console.log(phrase); // Hello
  
    var phrase;
  }
  sayHi();



// 2
  function sayHi() {
    phrase = "Hello"; // (*)
  
    // 即使这样 var phrase 也会提升到函数顶部 
    if (false) {
      var phrase;
    }
  
    console.log(phrase); // Hello
  }
  sayHi();

// 3
function sayHi() {
    console.log(phrase); // undefined 这样 拿不到  因为只会提升 var phrase  不会提升 赋值 
  
    var phrase = "Hello";
  }
  
  sayHi();

  // 4 
