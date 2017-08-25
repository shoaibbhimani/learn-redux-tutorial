import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

import promisemiddleware from "redux-promise-middleware";

import todosreducer from "./todoreducer.js";
import userReducer from "./userReducer.js";

const store = combineReducers({
	todos: todosreducer,
	userInfo: userReducer
});

const createStoreWithMiddleWare = applyMiddleware(promisemiddleware(), logger)(
	createStore
);

export default createStoreWithMiddleWare(
	store,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
