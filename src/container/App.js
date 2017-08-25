//packages
import React, { Component } from "react";
import { connect } from "react-redux";

//components
import AddTodo from "../components/AddTodo.js";
import TodoItem from "../components/TodoItem.js";

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
				<AddTodo addTodo={addTodo} />
				<ul className="list-group">
					{todos.map((todo, index) => {
						return (
							<TodoItem
								deleteTodo={deleteTodo}
								editTodo={editTodo}
								todo={todo}
								key={index}
								index={index}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		todos: state
	};
};

export default connect(mapStateToProps, { addTodo, deleteTodo, editTodo })(App);
