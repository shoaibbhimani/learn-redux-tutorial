import {
	ADD_TODO,
	DELETE_TODO,
	EDIT_TODO
} from "../actionTypes/todo-action-types.js";

const addTodo = ({ text, desc }) => {
	return {
		type: ADD_TODO,
		payload: {
			text,
			desc,
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

const editTodo = ({ text, index, desc }) => {
	return {
		type: EDIT_TODO,
		payload: {
			text,
			desc,
			index
		}
	};
};

export { addTodo, deleteTodo, editTodo };
