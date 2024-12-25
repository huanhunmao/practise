

/**
 * 二维数组 创建
 */

const arr = new Array(5);
const len = arr.length;
for(let i = 0 ; i < len; i++){
    arr[i] = []
}

// console.log(arr);
// [
//     [], [], [], [],
//     [], [], [], []
//   ]


/**
 * 二维数组 访问
 */

const outerLen = arr.length 
for(let i=0; i < outerLen; i++){
    const innerLen = arr[i].length
    for(let j=0; j < innerLen; j++){
        console.log(arr[i][j], i, j);
    }
}