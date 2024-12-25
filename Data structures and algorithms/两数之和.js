
const obj = {}

obj['a'] = 1
obj['b'] = 2
console.log(obj); // { a: 1, b: 2 }


// 使用 对象 {} 作为 map 结构来模拟
const twoSum = function(nums, target) {
    // 这里我用对象来模拟 map 的能力
    const diffs = {}
    // 缓存数组长度
    const len = nums.length
    // 遍历数组
    for(let i=0;i<len;i++) {
        // 判断当前值对应的 target 差值是否存在（是否已遍历过）
        if(diffs[target-nums[i]]!==undefined) {
            // 若有对应差值，那么答案get！
            return [diffs[target - nums[i]], i]
        }
        // 若没有对应差值，则记录当前值
        diffs[nums[i]]=i
    }
};

console.log(twoSum([1,2,3,4,5],9)); // [ 3, 4 ]



// 使用 map
const twoSum2 = function (nums, target){
    const map = new Map()
    const len = nums.length
    
    for(let i=0; i<len; i++){
        if(map.has(target - nums[i])){
            return [map.get(target - nums[i]), i]
        }

        map.set(target - nums[i], i)
    }
}

console.log(twoSum([1,2,3,4,5],5)); // [ 1, 2 ]

