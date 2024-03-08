import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn, user }) => {

  const navigate = useNavigate()

  return (
    <nav className="flex justify-between items-center py-4">
      <h1 className="text-2xl font-bold text-gray-800">Social Media</h1>
      <div>
        {isLoggedIn ? (
          <>
            <div className="flex items-center">
              <img src={user.profilePicture} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
              <p className="text-gray-800 text-lg font-semibold">{user.firstName}</p>
              <button onClick={() => {
                localStorage.removeItem('token')
                navigate('/')
              }} className="bg-red-500 text-white py-2 px-3 mx-3 rounded-md">Log Out</button>
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
