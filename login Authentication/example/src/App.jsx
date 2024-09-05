import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Signin from './Signin'
import Todo from './Todo'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='signin' element={<Signin/>}></Route>
      <Route path='Todo' element={<Todo/>}></Route>

    </Routes>

  )
}

export default App


