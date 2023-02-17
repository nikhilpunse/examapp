import React from 'react'
import './App.css'
import Testpage from './components/Testpage'
import Instruction1 from './components/Instruction1'
import Instruction2 from './components/Instruction2'
import {Route,Routes} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Instruction1/>} />
        <Route path='/instruction2' element={<Instruction2/>} />
        <Route path='/exam' element={<Testpage/>} />
      </Routes>
      

    </div>
  )
}

export default App