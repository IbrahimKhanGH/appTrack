import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to Your Internship Application Tracker</h1>
      <p className="text-xl">Track and manage your internship applications with ease!</p>
      
      {/* Example navigation links */}
      <Link to="/add" className="text-blue-500 underline hover:text-blue-700">Add Application</Link>
      <Link to="/view" className="text-blue-500 underline hover:text-blue-700">View Applications</Link>
    </div>
  );
};

export default HomePage;
