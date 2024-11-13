
let prevDepsAry = []
let effectIndex = 0

function useEffect(callback, depsAry){
    if(Object.prototype.toString.call(callback) !== '[object Function]'){
        throw new Error('useEffect的第一个参数必须是一个函数')
    }

    if(depsAry !== undefined && Object.toString.call(depsAry) !== '[object Array]'){
        throw new Error('useEffect的第二个参数必须是个数组')
    }

    const currentIndex = effectIndex
    const prevDeps = prevDepsAry[currentIndex]

    const hasChanged = !prevDeps || !depsAry || depsAry.some((dep,i) => dep !== prevDeps[i])

    if(hasChanged){
        callback()
    }

    prevDepsAry[currentIndex] = depsAry

    effectIndex++
}

function resetEffectIndex(){
    effectIndex = 0
}