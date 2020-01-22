import React, { useReducer } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { initialState, reducer } from './reducers/Reducer.js';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state);
  const addTodo = (input) => {
    const newTodo = {
      todo: input,
      completed: false,
      id: Math.random()
    }
    dispatch({type: "ADD_TODO", payload: newTodo})
  }

  function handleComplete(id) {
    dispatch({ type: "COMPLETED_TODO", payload: id });
  }

  const clearCompletedTodos = () => {
    dispatch({type: "CLEAR_COMPLETED"})
  }

  return (
    <div className="App">
      <h1>My daily To-do's</h1>
      <TodoForm addTodo={addTodo} />
      <button className="delete-button" onClick={e => {clearCompletedTodos()}}>
        Clear Completed Tasks
      </button>
      <TodoList state={state} handleComplete={handleComplete} />
    </div>
  );
}

export default App;