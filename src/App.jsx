import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import MainLayout from './Components/MainLayout'; // We will create this new component
import './index.css';

function App() {
  return (
    <>
      <Header />
      <hr className="hr-line" />
      <div className="page-body">
        <Dashboard />
        <Navbar />
        <Routes>
          {/* Default route redirects to the main layout for operators */}
          <Route path="/" element={<Navigate to="/operators" replace />} />

          {/* All main application logic now lives inside the MainLayout component */}
          <Route path="/operators/*" element={<MainLayout view="operators" />} />
          <Route path="/stations/*" element={<MainLayout view="stations" />} />

          {/* You can add other top-level routes here if needed */}
        </Routes>
      </div>
    </>
  );
}

export default App;