import {
	ADD_TODO,
	DELETE_TODO,
	EDIT_TODO
} from "../actionTypes/todo-action-types.js";

const addTodo = ({ text }) => {
	return {
		type: ADD_TODO,
		payload: {
			text,
			completed: false
		}
	};
};
const deleteTodo = index => {
	return {
		type: DELETE_TODO,
		payload: index
	};
};

const editTodo = ({ text, index }) => {
	return {
		type: EDIT_TODO,
		payload: {
			text,
			index
		}
	};
};

export { addTodo, deleteTodo, editTodo };
