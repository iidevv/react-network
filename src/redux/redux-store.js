import { applyMiddleware, createStore } from "redux";
import combineReducers from './reducers/index';
import thunkMiddleware from "redux-thunk";

let store = createStore(combineReducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;