import { createStore, applyMiddleware } from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import reducer from './ducks/users';

let createStoreWithMiddleware = applyMiddleware(reduxPromiseMiddleware())(createStore)

let store = createStoreWithMiddleware(reducer)

export default store;