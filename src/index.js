import React from "react";
import ReactDOM from "react-dom";

import App from "./container/App";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./store/index.js";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
