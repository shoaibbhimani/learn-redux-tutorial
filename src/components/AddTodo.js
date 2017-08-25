import React from "react";

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
				<form onSubmit={this.addItemToState}>
					<input type="text" ref="addTodo" />
					<button type="submit">Add Todo</button>
				</form>
			</div>
		);
	}
}
export default AddTodo;
