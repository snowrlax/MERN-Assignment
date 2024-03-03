import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Desktop from './components/Desktop'
import LoggedInUser from './components/LoggedInUser'
import './App.css'
import React from 'react'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Desktop />} />
          <Route path='/user' element={<LoggedInUser />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
