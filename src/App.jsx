import React from 'react'
import Landing from './Components/Landing'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'



const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App