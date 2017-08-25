import {
	ADD_TODO,
	DELETE_TODO,
	EDIT_TODO,
	GET_TODOS
} from "../actionTypes/todo-action-types.js";

import axios from "axios";

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

const getTodos = () => {
	return {
		type: GET_TODOS,
		payload: axios.get("https://jsonplaceholder.typicode.com/todos")
	};
};

export { addTodo, deleteTodo, editTodo, getTodos };
