import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEllipsisV } from "react-icons/fa";

const Dropdown = ({children, className}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate()

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center items-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
      >
        {/* Three dots icon */}
        <FaEllipsisV />
      </button>

      {/* Dropdown panel */}
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {/* Dropdown items */}
            <a
              onClick={() => {navigate('/dashboard/newpost')}}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:cursor-pointer"
              role="menuitem"
            >
              Create Post
            </a>
            <a              
              onClick={() => {navigate('/dashboard')}}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:cursor-pointer"
              role="menuitem"
            >
              Dashboard
            </a>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
