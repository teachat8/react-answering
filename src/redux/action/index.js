// 这里写组件改变redux里面的状态的方法名以及参数，需要调用下面这些方法的要在对应的组件中导入

// 点击下一题
export function addItemNum() {
    return {
        type : 'addItemNum',
    }
}

// 记录做题答案
export function remberItemNum(item) {
    return {
        type : 'remberItemNum',
        item
    }
}

// 初始化
export function init() {
    return {
        type : 'init'
    }
}

// 初始化答题记录
export function initAnswer() {
    return {
        type : 'initAnswer'
    }
}

// 开始定时器
export function remberAllTimer(item) {
    return {
        type : 'remberAllTimer',
        item
    }
}






