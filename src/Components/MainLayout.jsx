import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import View from './View';
import EmployeeList from './EmployeeList';
import EmployeeDetails from './EmployeeDetails';
import Employees from '../assets/images/Employees';

const EmployeeDetailWrapper = () => {
  const { employeeId } = useParams();
  const employee = Employees.find((e) => e.id === employeeId);
  if (!employee) {
    return <div className="employee-detail"><p style={{ padding: '20px' }}>Employee not found.</p></div>;
  }
  return <EmployeeDetails employee={employee} />;
};

const MainLayout = ({ view }) => {
  const [showActive, setShowActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const filteredEmployees = Employees
      .filter((emp) => emp.active === !showActive)
      .filter((emp) => {
        const term = searchTerm.trim().toLowerCase();
        return !term || emp.userName.toLowerCase().includes(term) || emp.id.toLowerCase().includes(term);
      });

    const firstMatch = filteredEmployees[0];
    const currentSelectionId = params['*']?.split('/')[0];

    const isCurrentSelectionValid = filteredEmployees.some(emp => emp.id === currentSelectionId);

    if (!isCurrentSelectionValid) {
      if (firstMatch) {
        navigate(`/${view}/${encodeURIComponent(firstMatch.id)}`, { replace: true });
      } else {
        navigate(`/${view}`, { replace: true });
      }
    }
  }, [showActive, searchTerm, view, navigate, params]);

  return (
    <div className="page-content">
      <View
        showActive={showActive}
        setShowActive={setShowActive}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        users={Employees}
      />
      <div className="container">
        <EmployeeList
          employees={Employees}
          showActive={showActive}
          searchTerm={searchTerm}
         selectedEmployeeId={params['*']?.split('/')[0]} 
        />
        <Routes>
          <Route path=":employeeId/*" element={<EmployeeDetailWrapper />} />
          <Route path="/" element={<div className="employee-detail"><p style={{ padding: '20px' }}>No employees match the current filter.</p></div>} />
        </Routes>
      </div>
    </div>
  );
};

export default MainLayout;