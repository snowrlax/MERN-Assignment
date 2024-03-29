import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Dropdown from './Dropdown';
import { FaPoo, FaPaw } from 'react-icons/fa';

const Navbar = ({ isLoggedIn, user }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <nav className="flex justify-between items-center py-4">
      <h1 className="flex flex-row items-center text-2xl font-bold text-gray-800"><FaPaw className='mx-2' /> Animal Media</h1>
      <div>
        {isLoggedIn ? ( 
          <>
            <div className="flex items-center">

              {user.profilePicture ? <img src={user.profilePicture} alt="Profile" className="w-8 h-8 rounded-full mr-2" /> : <FaPoo className='w-8 h-8 p-2 mx-2 rounded-full bg-slate-400' /> }
              <p className="text-gray-800 text-lg font-semibold">{user.firstName}</p>

              <Dropdown className="mx-4">
                <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-3 mx-3 rounded-md w-5/6">Log Out</button>
              </Dropdown>
            </div>
          </>
        ) : (
          <>
            <a onClick={() => {
              navigate('/signup')
            }} className="text-gray-800 text-lg font-semibold mr-4 hover:cursor-pointer">Sign Up</a>
            <a onClick={() => {
              navigate('/signin')
            }} className="text-gray-800 text-lg font-semibold hover:cursor-pointer">Sign In</a>

          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
