// 导入题目信息
import data from '../../data/db';

// state对象
const initialState = {
    itemNum : 1,//当前第几题
    timer : null,//记录做题的定时器
    allTime : 0,//答题共用时间
    answerId: [], //答案id
    itemDetail : data,//题目数据
};

// 这东西可以有多个
const reducer = function(state = initialState, action) {
    let arr = state.answerId;

    // store.dispatch(XX())就是调用这下面的方法
    switch(action.type) {

        // 初始化答题记录
        case 'initAnswer':
            return Object.assign({}, state, { answerId : [], allTime : 0 });

        // 点击下一题
        case 'addItemNum':
            return Object.assign({}, state, { itemNum: ++state.itemNum });

        // 记录做题选中的所有答案
        case 'remberItemNum':
            arr.push(action.item);
            return Object.assign({}, state, { answerId : arr });

        // 初始化
        case 'init':
            clearInterval(state.timer);
            return Object.assign({}, state, { itemNum : 1 });

        // 记录做题时间
        case 'remberAllTimer':
            state.timer = setInterval( () => {
                console.log( state.allTime );
                Object.assign({}, state, { allTime : ++state.allTime });
            }, 1000);
    }
    return state;
};

export default reducer;
