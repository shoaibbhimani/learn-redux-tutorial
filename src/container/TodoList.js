import React from "react";
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";

import TodoItem from "../components/TodoItem.js";

import { deleteTodo, editTodo } from "../actionCreator/todo-action-creator.js";

class TodoList extends React.Component {
	render() {
		const { todos, deleteTodo, editTodo } = this.props;
		return (
			<section>
				<NavLink to="/newtodo">Add New Todo</NavLink>
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
			</section>
		);
	}
}

const mapStateToProps = state => {
	return {
		todos: state.todos
	};
};

export default connect(mapStateToProps, {
	deleteTodo,
	editTodo
})(TodoList);
