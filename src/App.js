import React, { Component } from 'react';

// 引入react-router配置
import router from './router/router';

// 引入react-redux配置
import { Provider } from 'react-redux';
import store from './redux/store/store';

// 引入项目的样式
import './App.css';

class App extends Component {
    constructor(props) {
        super( props );
    }
    render() {
        return (
            <Provider store={store}>
                { router }
            </Provider>
        );
    }
}

export default App;
