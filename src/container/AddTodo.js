import React from "react";
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";

import { addTodo } from "../actionCreator/todo-action-creator.js";

class AddTodo extends React.Component {
	addItemToState = e => {
		e.preventDefault();
		this.props.addTodo({
			text: this.refs.addTodo.value
		});

		this.refs.addTodo.value = "";
	};
	render() {
		return (
			<div>
				<NavLink to="/">Back to Index </NavLink>
				<form onSubmit={this.addItemToState}>
					<input type="text" ref="addTodo" />
					<button type="submit">Add Todo</button>
				</form>
			</div>
		);
	}
}
export default connect(null, { addTodo })(AddTodo);
