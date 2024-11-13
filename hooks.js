// [React] hooks 调用是可以写在 if 语句里面吗

// Hooks 的调用不能放在 if 语句中。React 要求 Hooks 在组件的顶层调用，以确保每次渲染时 Hooks 的调用顺序保持一致。将 Hooks 放在 if 语句中会导致 React 无法正确地追踪状态和副作用
function MyComponent({condition}){
    const value = condition ? useHookA() : useHookB()  // ❌
}


// ✅
function MyComponent2({condition}){
    const hookA = useHookA()
    const hookB = useHookB()

    const value = condition ? hookA : hookB
}