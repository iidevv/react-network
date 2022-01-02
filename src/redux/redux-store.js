import { createStore } from "redux";
import combineReducers from './reducers/index';

let store = createStore(combineReducers);

window.store = store;

export default store;