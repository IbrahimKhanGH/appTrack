import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddApplicationPage from './components/AddApplicationPage';
import ViewApplicationsPage from './components/ViewApplicationsPage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddApplicationPage />} />
          <Route path="/view" element={<ViewApplicationsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </div>
    </Router>
  );
};



export default App;