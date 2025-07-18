import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import '../Styles/EmployeeList.css';

export default function EmployeeList({ employees, showActive, searchTerm, selectedEmployeeId }) {
  const navigate = useNavigate();
  const location = useLocation();
//   const { employeeId } = useParams();

  const view = location.pathname.startsWith('/stations') ? 'stations' : 'operators';

  const filtered = employees
    .filter((emp) => emp.active === !showActive)
    .filter((emp) => {
      const term = searchTerm.toLowerCase();
      return !term || emp.userName.toLowerCase().includes(term) || emp.id.toLowerCase().includes(term);
    });

  return (
    <div className="employee-list">
      {filtered.map((emp) => {
        // const isSelected = employeeId === emp.id;
        const isSelected = selectedEmployeeId === emp.id;
        const today = new Date();
        const relieving = new Date(emp.releivingDate);
        const daysLeft = Math.ceil((relieving - today) / (1000 * 60 * 60 * 24));
        const borderColor = daysLeft <= 30 ? '#D83B01' : '#58A55C';

        return (
          // Using the exact class names from your original project
          <button
            key={emp.id}
            className={`buttons${isSelected ? ' active selected' : ''}`}
            // style={isSelected ? { backgroundColor: "#f4f5f8" } : {}}
            onClick={() => navigate(`/${view}/${encodeURIComponent(emp.id)}`)}
          >
            <div className="info">
              <img
                src={new URL(`../assets/images/${emp.image}`, import.meta.url).href}
                alt={emp.userName}
                style={{ border: `3px solid ${borderColor}` }}
              />
              <div className="text">
                <div className="name">{emp.userName}</div>
                <div className="id">{emp.id}</div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}