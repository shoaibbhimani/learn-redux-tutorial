import React from "react";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class TodoDetails extends React.Component {
	render() {
		const { todos, match } = this.props;
		const todo = todos.find((item, index) => {
			return index === parseInt(match.params.id, 10);
		});

		if (typeof todo === "undefined") {
			return <Redirect to="/" />;
		}

		return (
			<section>
				<section>
					{todo.text}
				</section>
				<section>
					{todo.desc}
				</section>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return {
		todos: state.todos
	};
};

export default connect(mapStateToProps, null)(TodoDetails);
