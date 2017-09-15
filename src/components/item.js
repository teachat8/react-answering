import React , { Component } from 'react';
import { connect } from 'react-redux';
import store from '../redux/store/store';

// 引入定义的 action
import {
    addItemNum,
    remberItemNum,
    initAnswer,
    init,
    remberAllTimer
} from '../redux/action/index';

class Item extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            chooseItemId : null
        };
    }

    componentWillMount() {
        store.dispatch(initAnswer());
        store.dispatch(remberAllTimer());
        document.body.style.background = 'url(http://cangdu.org/happyfri/static/img/1-1.jpg)  no-repeat center / cover';
    }

    chooseType(type) {
        switch(type){
            case 0: return 'A';
            case 1: return 'B';
            case 2: return 'C';
            case 3: return 'D';
            default : return 'E';
        }
    }

    chooseItem(id) {
        this.setState({
            chooseItemId : id
        });
    }

    next() {
        if ( !this.state.chooseItemId ) {
            alert('请选择答案');
            return;
        }
        store.dispatch(remberItemNum(this.state.chooseItemId));
        if ( this.props.reducers.itemNum === this.props.reducers.itemDetail.length ) {
            this.props.history.push('/score');
            store.dispatch(init());
        } else {
            this.setState({
                chooseItemId : null
            });
            store.dispatch(addItemNum());
        }
    }

    render() {
        return (
            <div>
                <div className="item-header">
                    <span className="item-index">题目{this.props.reducers.itemNum}</span>
                </div>
                <div className="item-main">
                    <p className="item-main-header">题目<span>{this.props.reducers.itemNum}</span></p>
                    <div className="select-list">
                        {
                            this.props.reducers.itemDetail[this.props.reducers.itemNum-1]['topic_answer'].map( ( item, index, arr ) => {
                                return (
                                    <a key={index} href="javascript:;" className={ this.state.chooseItemId === item.topic_answer_id ? 'select-item active' : 'select-item'} onClick={ this.chooseItem.bind(this, item.topic_answer_id
                                        )}>
                                        <span className="index">{ this.chooseType(index) }</span>
                                        <span>{ item.answer_name }</span>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
                <a href="javascript:;" className="com-next-btn" onClick={ this.next.bind(this) }>下一题</a>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return store;
};
// 连接 store，作为 props
export default connect(mapStateToProps)(Item);