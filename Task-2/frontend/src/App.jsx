import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './components/HomePage';
import Signup from './components/Signup';
import Signin from './components/Signin';
import CreatePost from './components/CreatePost';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} /> 
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboard/newpost' element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
