import React from 'react';

const Navbar = ({ isLoggedIn, user }) => {
  return (
    <nav className="flex justify-between items-center py-4">
      <h1 className="text-2xl font-bold text-gray-800">Social Media</h1>
      <div>
        {isLoggedIn ? (
          <>
            <div className="flex items-center">
              <img src={user.profilePicture} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
              <p className="text-gray-800 text-lg font-semibold">{user.name}</p>
            </div>
          </>
        ) : (
          <>
            <a href="#" className="text-gray-800 text-lg font-semibold mr-4">Sign Up</a>
            <a href="#" className="text-gray-800 text-lg font-semibold">Sign In</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
