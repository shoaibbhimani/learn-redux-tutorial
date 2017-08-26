//packages
import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

//components
import AddTodo from "./AddTodo.js";
import TodoList from "./TodoList.js";
import TodoDetails from "./TodoDetails.js";
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
				<Switch>
					<Route path="/newtodo" component={AddTodo} />
					<Route exact path="/" component={TodoList} />
					<Route path="/todo/:id" component={TodoDetails} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		todos: state.todos
	};
};

export default withRouter(
	connect(mapStateToProps, { addTodo, deleteTodo, editTodo })(App)
);
