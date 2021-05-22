//packages
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//components
import AddTodo from "../components/AddTodo.js";
import TodoItem from "../components/TodoItem.js";

//Action Creators

import {
  addTodo,
  deleteTodo,
  editTodo,
  getTodos
} from "../actionCreator/todo-action-creator.js";


const App = () => {

  const dispatch = useDispatch()

  const todos = useSelector(state => {
    return state.todos
  })

  useEffect(() => {
    dispatch(getTodos())
  }, [])

  const addTodoHandler = (...value) => {
    dispatch(addTodo(...value))
  }

  const editTodoHandler = (...value) => {
    dispatch(editTodo(...value))
  }

  const deleteTodoHandler = (...value) => {
    dispatch(deleteTodo(...value))
  }

  return (
    <div className="App">
      <AddTodo addTodo={addTodoHandler} />
      <ul className="list-group">
        {todos.map((todo, index) => {
          return (
            <TodoItem
              deleteTodo={deleteTodoHandler}
              editTodo={editTodoHandler}
              todo={todo}
              key={index}
              index={index}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App
