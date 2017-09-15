import React , { Component } from 'react';
import { connect } from 'react-redux';

class Score extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            rightAnswer: [2, 7, 12, 13, 18], //正确答案
            scoreTipsArr:['你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明啦，葡萄之家欢迎你！'],
            score : 0,
            scoreTip : ''
        };
    }

    componentWillMount() {
        let vue = this,
            score = 0;

        this.props.reducers.answerId.forEach( ( item, index, arr ) => {
            if ( item === vue.state.rightAnswer[index] ) {
                score += 20;
            }
        });
        this.setState({
            score : score
        });
        document.body.style.backgroundImage = 'url(http://cangdu.org/happyfri/static/img/4-1.jpg)';

    }
    showText(score) {
        switch(score){
            case 100: return 4;
            case 80: return 3;
            case 60: return 2;
            case 40: return 1;
            case 20: return 0;
            default : return 0;
        }
    }

    render() {
        return (
            <div>
                <div className="score-box">
                    <div className="score-tips">
                        <p className="score"><span>{this.state.score}</span>分</p>
                        <p>{this.state.scoreTipsArr[this.showText(this.state.score)]}</p>
                    </div>
                    <p>总用时： <span>{ this.props.reducers.allTime }</span>秒</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return store;
};
// 连接 store，作为 props
export default connect(mapStateToProps)(Score);