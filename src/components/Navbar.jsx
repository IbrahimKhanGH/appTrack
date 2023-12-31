import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">Internship Tracker</Link>
          </div>
          <div className="flex">
            <Link to="/add" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Add Application</Link>
            <Link to="/view" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">View Applications</Link>
            <Link to="/login" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
            <Link to="/register" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;