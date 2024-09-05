import React, { useState } from 'react';
import './Todolist.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const InputChange = (e) => {
    setInputValue(e.target.value);
  }
  const AddTodo = () => {
     if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
       setInputValue('');
    }
  }
  const DeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }


  return (
    <div id='todo'>
      <center>   <h2>Todo List</h2>
  <input
        type="text"
        value={inputValue}
        onChange={InputChange}
        placeholder="Add items..."
      />
      <button onClick={AddTodo}>ADD</button></center> 
      <p>
        {todos.map((todo, index) => (
         
          <p key={index}>
            <hr/>
            <input  type="checkbox"/><input type="text"  value= {todo} readOnly  />
            <button onClick={() => DeleteTodo(index)}>Delete</button>
            <hr/>
          </p>
        ))}
      </p>
    </div>
  )
}

export default TodoList;