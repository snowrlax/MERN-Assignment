import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Desktop from './components/Desktop'
import LoggedInUser from './components/LoggedInUser'
import Login from './components/Login'
import './App.css'
import React from 'react'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Desktop />} />
          <Route path='/user' element={<LoggedInUser />} />
          <Route path='/signin' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
