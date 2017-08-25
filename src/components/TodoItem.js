import React from "react";

class TodoItem extends React.Component {
	deleteItemFromState = () => {
		this.props.deleteTodo(this.props.index);
	};
	render() {
		const { todo } = this.props;
		return (
			<li className="list-group-item">
				{todo.text}
				<button
					onClick={this.deleteItemFromState}
					className="btn btn-default"
				>
					Delete
				</button>
			</li>
		);
	}
}

export default TodoItem;
