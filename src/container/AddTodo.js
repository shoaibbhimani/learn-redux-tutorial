import React from "react";
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";

import { addTodo } from "../actionCreator/todo-action-creator.js";

class AddTodo extends React.Component {
	addItemToState = e => {
		e.preventDefault();
		this.props.addTodo({
			text: this.refs.text.value,
			desc: this.refs.desc.value
		});

		this.refs.text.value = "";
		this.refs.desc.value = "";
	};
	render() {
		return (
			<div>
				<NavLink to="/">Back to Index </NavLink>
				<form onSubmit={this.addItemToState}>
					<input type="text" ref="text" />
					<input type="text" ref="desc" />
					<button type="submit">Add Todo</button>
				</form>
			</div>
		);
	}
}
export default connect(null, { addTodo })(AddTodo);
