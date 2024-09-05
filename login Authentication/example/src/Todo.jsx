import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Todo = () => {
    
    const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
 
  const AddTodo = () => {
    if (inputValue !== '') {
     setTodos([...todos, inputValue]);
      setInputValue('');
   }
 }
 const DeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  return (
    <div>

       <button><Link to="/">log out</Link></button>

       <center>   <h2>Todo List</h2>
  <input
        type="text"
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)}
        placeholder="Add items..."
      />
      <button onClick={AddTodo}>ADD</button></center> 
      <p>
        {todos.map((todo,index)=>(
            <p key={index}>
                <hr />
                <input type="checkbox" /><input type="text" value={todo} readOnly/>
                <button onClick={()=>DeleteTodo(index)}>delete</button>
                <hr />
            </p>

        ))}
      </p>

    </div>
  )
}

export default Todo