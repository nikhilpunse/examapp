import React from 'react'
import './App.css'
import Testpage from './components/Testpage'
import Instruction1 from './components/Instruction1'
import Instruction2 from './components/Instruction2'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Profile from './components/Profile'
import Listing from './components/Listing'
import {Route,Routes} from 'react-router-dom'

const App = () => {
  return (
    <div>    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/listing' element={<Listing/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/instruction1' element={<Instruction1/>} />
        <Route path='/instruction2' element={<Instruction2/>} />
        <Route path='/exam' element={<Testpage/>} />
      </Routes>
    </div>
  )
}

export default App