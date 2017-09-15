import React , { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor( props ) {
        super( props );
    }
    componentWillMount() {
        document.body.style.background = 'url(http://cangdu.org/happyfri/static/img/1-1.jpg)  no-repeat center / cover';
    }
    render() {
        return (
            <div>
                <img src="http://cangdu.org/happyfri/static/img/1-2.png" className="home-img" />
                <Link to="item" className="com-next-btn">开始</Link>
            </div>
        );
    }
}

export default Home;