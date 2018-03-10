import todosReducer from "./todoreducer";
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO
} from "../actionTypes/todo-action-types.js";

describe("Todo Reducer", () => {
  it("Adding a Todo  in Todolist", () => {
    const initialState = [];
    const action = {
      type: ADD_TODO,
      payload: {
        text: "New Todo"
      }
    };

    var result = todosReducer(initialState, action);

    expect(result.length).toEqual(1);
  });

  it("Deleting a Todo from Todolist", () => {
    const initialState = [
      {
        text: "Learning React"
      },
      {
        text: "Learning Redux"
      }
    ];

    const action = {
      type: DELETE_TODO,
      payload: 1
    };

    const result = todosReducer(initialState, action);

    expect(result.length).toEqual(1);
  });

  it("Editing a Todo from todolist", () => {
    const initialState = [
      {
        text: "Learning React"
      },
      {
        text: "Learning Redux"
      }
    ];

    const action = {
      type: EDIT_TODO,
      payload: {
        index: 1,
        text: "Learned Redux"
      }
    };

    const result = todosReducer(initialState, action);

    console.log(result);
    expect(result[1].text).toEqual("Learned Redux");
  });
});
