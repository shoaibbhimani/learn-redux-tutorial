import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";

class App extends Component {
	addItemToState = e => {
		e.preventDefault();
		this.props.addTodo({
			text: this.refs.addTodo.value
		});

		this.refs.addTodo.value = "";
	};
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<form onSubmit={this.addItemToState}>
						<input type="text" ref="addTodo" />
						<button type="submit">Add Todo</button>
					</form>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to
					reload.
				</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		todos: state
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addTodo: ({ text }) => {
			dispatch({
				type: "ADD_TODO",
				payload: {
					text,
					completed: false
				}
			});
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
