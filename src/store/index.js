import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import todosreducer from "./todoreducer.js";
import userReducer from "./userReducer.js";

const store = combineReducers({
  todos: todosreducer,
  userInfo: userReducer
});

const createStoreWithMiddleWare = applyMiddleware(logger, thunk)(createStore);

export default createStoreWithMiddleWare(
  store,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
