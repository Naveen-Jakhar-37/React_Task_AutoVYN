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

  // This is the fully corrected useEffect hook.
  useEffect(() => {
    // 1. Get the list of employees that match the current filters.
    const filteredEmployees = Employees
      .filter((emp) => emp.active === !showActive)
      .filter((emp) => {
        const term = searchTerm.trim().toLowerCase();
        return !term || emp.userName.toLowerCase().includes(term) || emp.id.toLowerCase().includes(term);
      });

    // 2. Find the first employee in that filtered list.
    const firstMatch = filteredEmployees[0];
    const currentSelectionId = params['*']?.split('/')[0];

    // 3. Check if the currently selected employee is still visible in the filtered list.
    const isCurrentSelectionValid = filteredEmployees.some(emp => emp.id === currentSelectionId);

    // 4. If the selection is no longer valid (or if there's no selection), navigate to the new first match.
    if (!isCurrentSelectionValid) {
      if (firstMatch) {
        navigate(`/${view}/${encodeURIComponent(firstMatch.id)}`, { replace: true });
      } else {
        // If there are no matches at all, navigate to the base view
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
          {/* A nested "splat" route correctly renders the details or a fallback message */}
          <Route path=":employeeId/*" element={<EmployeeDetailWrapper />} />
          <Route path="/" element={<div className="employee-detail"><p style={{ padding: '20px' }}>No employees match the current filter.</p></div>} />
        </Routes>
      </div>
    </div>
  );
};

export default MainLayout;