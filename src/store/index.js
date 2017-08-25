import { createStore } from "redux";

import todosreducer from "./todoreducer.js";

export default createStore(
	todosreducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
