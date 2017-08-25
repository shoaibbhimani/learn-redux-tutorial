import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  GET_TODOS_FULFILLED,
  GET_TODOS_PENDING
} from "../actionTypes/todo-action-types.js";

const initialState = {
  isLoading: false,
  content: []
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, content: [...state.content, action.payload] };
    case DELETE_TODO:
      return {
        ...state,
        content: [
          ...state.content.slice(0, action.payload),
          ...state.content.slice(action.payload + 1)
        ]
      };
    case EDIT_TODO:
      let index = action.payload.index;
      return {
        ...state,
        content: [
          ...state.content.slice(0, index),
          { ...state.content[index], text: action.payload.text },
          ...state.content.slice(index + 1)
        ]
      };
    case GET_TODOS_PENDING:
      return {
        isLoading: true,
        content: []
      };
    case GET_TODOS_FULFILLED:
      return {
        isLoading: false,
        content: [...state.content, ...action.payload.data]
      };
    default:
      return state;
  }
};

export default todosReducer;
