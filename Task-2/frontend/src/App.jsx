import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import CreatePost from './pages/CreatePost';
import Dashboard from './pages/Dashboard';
import EditPost from './pages/EditPost';

function App() {
  return (
    <div className='bg-stone-200'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboard/newpost' element={<CreatePost />} />
          <Route path='/dashboard/editpost/:postid' element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
