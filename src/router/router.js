import React from 'react';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import Home from '../components/home.js';
import Item from '../components/item.js';
import Score from '../components/score.js';

const history = createHistory();

const RouteConfig = (
    <Router path="/" history={history}>
        <div>
            <Route path="/"  exact component={Home} />
            <Route path="/item" component={Item} />
            <Route path="/score" component={Score} />
        </div>
    </Router>
);

export default RouteConfig;
