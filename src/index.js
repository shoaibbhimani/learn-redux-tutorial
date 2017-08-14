// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import { createStore } from "redux"

//Adding a Task to a list
//Delete
//Edit 
//Completed


var todosReducer = (state = [], action) => {
  switch(action.type){
  	case "ADD_TODO":
  	 return [
  	 	...state,
  	 	action.payload
  	 ]
  	 case "DEL_TODO":
  	  return [
  	  	...state.slice(0,action.payload),
  	  	...state.slice(action.payload+1)
  	  ]

  	  case "COMPLETED_TODO":
  	  return state.map((todoitem, index) => {
  	  	if(action.payload === index){
  	  		todoitem.isCompleted = !todoitem.isCompleted
  	  	}

  	  	return todoitem
  	  })
  	 default:
  	  return state;
  }
}

const store = createStore(todosReducer)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({
	type:"ADD_TODO",
	payload:{
		text:"Learn Redux",
		isCompleted:false
	}
})

store.dispatch({
	type:"ADD_TODO",
	payload:{
		text:"Learn React",
		isCompleted:false
	}
})

// store.dispatch({
// 	type:"DEL_TODO",
// 	payload:1
// })

store.dispatch({
	type:"COMPLETED_TODO",
	payload:0
})




//GetState
//dipatch
//subscribe
