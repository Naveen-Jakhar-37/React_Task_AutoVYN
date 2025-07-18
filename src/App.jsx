import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import MainLayout from './Components/MainLayout';
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
          <Route path="/" element={<Navigate to="/operators" replace />} />

          <Route path="/operators/*" element={<MainLayout view="operators" />} />
          <Route path="/stations/*" element={<MainLayout view="stations" />} />

        </Routes>
      </div>
    </>
  );
}

export default App;