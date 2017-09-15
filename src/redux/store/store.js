import { createStore, combineReducers } from 'redux';
import reducers from '../reducer/index';

const store = createStore( combineReducers({ reducers : reducers }) );
export default store;