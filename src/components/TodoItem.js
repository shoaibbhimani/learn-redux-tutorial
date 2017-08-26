import React from "react";
import { NavLink } from "react-router-dom";

class TodoItem extends React.Component {
	constructor() {
		super();
		this.state = {
			isEditing: false
		};
	}

	toggleIsEditing = () => {
		this.setState({
			isEditing: !this.state.isEditing
		});
	};

	deleteItemFromState = () => {
		this.props.deleteTodo(this.props.index);
	};

	renderItem = () => {
		const { todo, index } = this.props;
		return (
			<section>
				<NavLink to={`/todo/${index}`}>
					{" "}{todo.text}
				</NavLink>
				<button
					onClick={this.deleteItemFromState}
					className="btn btn-default"
				>
					Delete
				</button>
				<button
					className="btn btn-default"
					onClick={this.toggleIsEditing}
				>
					Edit
				</button>
			</section>
		);
	};

	editItemToState = e => {
		e.preventDefault();
		this.props.editTodo({
			text: this.refs.editTodo.value,
			desc: this.refs.editDesc.value,
			index: this.props.index
		});

		this.refs.editTodo.value = "";
		this.refs.editDesc.value = "";
		this.toggleIsEditing();
	};

	renderForm = () => {
		const { todo } = this.props;
		return (
			<form onSubmit={this.editItemToState}>
				<input type="text" ref="editTodo" defaultValue={todo.text} />
				<input type="text" ref="editDesc" defaultValue={todo.desc} />
				<button type="submit">Edit Todo</button>
			</form>
		);
	};

	render() {
		const { todo } = this.props;
		return (
			<li className="list-group-item">
				{this.state.isEditing ? this.renderForm() : this.renderItem()}
			</li>
		);
	}
}

export default TodoItem;
