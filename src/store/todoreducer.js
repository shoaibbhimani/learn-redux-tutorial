import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  GET_TODOS
} from "../actionTypes/todo-action-types.js";

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TODOS:
      return [...state, ...action.payload];
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    case EDIT_TODO:
      let index = action.payload.index;
      return [
        ...state.slice(0, index),
        { ...state[index], text: action.payload.text },
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
};

export default todosReducer;
