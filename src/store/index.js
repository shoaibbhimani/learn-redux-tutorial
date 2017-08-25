import { createStore, combineReducers } from "redux";

import todosreducer from "./todoreducer.js";
import userReducer from "./userReducer.js";

const store = combineReducers({
	todos: todosreducer,
	userInfo: userReducer
});

export default createStore(
	store,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
