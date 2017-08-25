import React, { Component } from "react";

import { connect } from "react-redux";

import AddTodo from "../components/AddTodo.js";
import TodoItem from "../components/TodoItem.js";

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
		},
		deleteTodo: index => {
			dispatch({
				type: "DELETE_TODO",
				payload: index
			});
		},
		editTodo: ({ text, index }) => {
			dispatch({
				type: "EDIT_TODO",
				payload: {
					text,
					index
				}
			});
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);