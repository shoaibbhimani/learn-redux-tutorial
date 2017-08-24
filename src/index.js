import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ;
// registerServiceWorker();

import { createStore } from "redux"

//Adding a new Task to List
//Delete a task from a list
//edit
//completed


const todosReducer = (state = [], action) => {
  switch(action.type){
    case "ADD_TODO":
     return [
      ...state,
      action.payload
     ]
     case "DELETE_TODO":
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1),
      ]
     default:
      return state;
  }
};

const store = createStore(todosReducer)

store.subscribe(() => {
  ReactDOM.render(<App dispatch={store.dispatch} todos={store.getState()} />, document.getElementById('root'))
})
//dispatch
//subscribe
// getstate

const App = ({ dispatch, todos }) => {
  let inputVal = '';
  return (
        <div>
          <input type="text" ref={(input) => inputVal = input } />
          <button onClick={() => {
              dispatch({
                type:"ADD_TODO",
                payload: inputVal.value
              })
              inputVal.value = "";
          }}>Add Todo</button>
          {
            todos.map((text, index) => {
              return <li key={index}>{text}
                <button onClick={() => {
                    dispatch({
                      type:"DELETE_TODO",
                      payload:index
                    })
                }}>
                  Remove this item
                </button>
              </li>
            })
          }
        </div>
    )
}

ReactDOM.render(<App dispatch={store.dispatch} todos={store.getState()} />, document.getElementById('root'))