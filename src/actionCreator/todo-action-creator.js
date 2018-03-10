import axios from "axios";

import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  GET_TODOS
} from "../actionTypes/todo-action-types.js";

const ROOTURL = "http://localhost:7777/todos";

const addTodo = ({ text }) => {
  /*
	return {
    type: ADD_TODO,
    payload: {
      text,
      completed: false
    }
  };*/

  return dispatch => {
    axios
      .post(ROOTURL, {
        text,
        completed: false
      })
      .then(() => {
        dispatch({
          type: ADD_TODO,
          payload: {
            text,
            completed: false
          }
        });
      })
      .catch(() => {
        //error
      });
  };
};

const deleteTodo = (index, todoId) => {
  // return {
  //   type: DELETE_TODO,
  //   payload: index
  // };

  return dispatch => {
    axios.delete(ROOTURL + "/" + todoId).then(() => {
      dispatch({
        type: DELETE_TODO,
        payload: index
      });
    });
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
  return dispatch => {
    axios.get(ROOTURL).then(response => {
      dispatch({
        type: GET_TODOS,
        payload: response.data
      });
    });
  };
};

export { addTodo, deleteTodo, editTodo, getTodos };
