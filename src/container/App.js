//packages
import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

//components
import AddTodo from "./AddTodo.js";
import TodoList from "./TodoList.js";

//Action Creators

import {
	addTodo,
	deleteTodo,
	editTodo
} from "../actionCreator/todo-action-creator.js";

class App extends Component {
	render() {
		const { todos, addTodo, deleteTodo, editTodo } = this.props;
		return (
			<div className="App">
				<Route path="/newtodo" component={AddTodo} />
				<Route path="/" component={TodoList} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		todos: state.todos
	};
};

export default connect(mapStateToProps, { addTodo, deleteTodo, editTodo })(App);
