import React from 'react';
import { NavLink, Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
import '../Styles/EmployeeDetails.css';
import FrameIcon from '../assets/images/Frame 25066.svg';

export default function EmployeeDetails({ employee }) {
  const params = useParams();
  const location = useLocation();

  // This correctly and stably builds the base path for the tabs.
  const view = location.pathname.startsWith('/stations') ? 'stations' : 'operators';
  const basePath = `/${view}/${params.employeeId}`;

  const today = new Date();
  const relieving = new Date(employee.releivingDate);
  const daysLeft = Math.ceil((relieving - today) / (1000 * 60 * 60 * 24));

  return (
    <div className="employee-detail">
      <div className="details">
        <div className="person">
          <img
            src={new URL(`../assets/images/${employee.image}`, import.meta.url).href}
            alt={employee.userName}
          />
          <div className="detail-text">
            <h2 className="detail-name">{employee.userName}</h2>
            <p className="detail-id">{employee.id}</p>
            <p className="dob">Date of Birth: {employee.dob}</p>
          </div>
        </div>
        <div className="joining-detail">
          <div>Joining Date: <b>{employee.joiningDate}</b></div>
          <div>Releiving Date: <b>{employee.releivingDate}</b></div>
          <div>
            Releiving In:{' '}
            <b style={{ color: daysLeft <= 30 ? '#D83B01' : '#58A55C' }}>
              {daysLeft < 0 ? 'Already Relieved' : `${daysLeft} days`}
            </b>
          </div>
        </div>
      </div>

      <div className="tabs" id="tabs">
        {/* THE FIX: The `to` prop uses the stable, absolute `basePath` */}
        <NavLink to={`${basePath}/deployment`} className={({ isActive }) => `nav-tab-2 ${isActive ? 'active' : ''}`}>
          DEPLOYMENT
        </NavLink>
        <NavLink to={`${basePath}/attendance`} className={({ isActive }) => `nav-tab-2 ${isActive ? 'active' : ''}`}>
          ATTENDANCE
        </NavLink>
        <NavLink to={`${basePath}/training`} className={({ isActive }) => `nav-tab-2 ${isActive ? 'active' : ''}`}>
          CLASSROOM TRAINING
        </NavLink>
      </div>

      <Routes>
        <Route
          path="deployment"
          element={
            <div className="table-wrapper">
              <table className="table-details">
                <thead>
                  <tr><th>Date</th><th></th><th>Actual Station</th><th>Planned Station</th><th>Shift</th><th>4M-MAN</th></tr>
                </thead>
                <tbody>
                  {employee.deploymentHistory?.map((entry, idx) => (
                    <tr key={idx}>
                      <td>{entry.from} - {entry.to}</td>
                      <td className={`timeline-icon ${idx === 0 ? 'first' : ''} ${idx === employee.deploymentHistory.length - 1 ? 'last' : ''}`}><div className="icon-wrapper">●</div></td>
                      <td>{entry.actualStation}</td>
                      <td>{entry.plannedStation}</td>
                      <td>{entry.shift}</td>
                      <td><img src={FrameIcon} alt="4M-MAN" style={{ height: '20px' }} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          }
        />
        <Route
          path="attendance"
          element={
            <>
              <div className="working"><table className="working-detail"><thead><tr><th>Total</th><th>Present</th><th>Absent</th></tr></thead><tbody><tr><td style={{ color: 'black', fontWeight: 'bold' }}>{employee.attendance.length}</td><td style={{ color: 'green' }}>{employee.attendance.filter((a) => a.punchIn !== 'Absent').length}</td><td style={{ color: 'red' }}>{employee.attendance.filter((a) => a.punchIn === 'Absent').length}</td></tr></tbody></table></div>
              <div className="attandance"><table className="attandance-detail"><thead><tr><th>Date</th><th>Shift</th><th>Punch In</th><th>Punch Out</th></tr></thead><tbody>{employee.attendance.map((entry, idx) => (<tr key={idx} style={{ backgroundColor: entry.punchIn === 'Absent' ? '#ffe5e5' : 'transparent' }}><td>{entry.date}</td><td>{entry.shift}</td><td>{entry.punchIn}</td><td>{entry.punchOut}</td></tr>))}</tbody></table></div>
            </>
          }
        />
        <Route
          path="training"
          element={
            <div className="training"><table className="training-detail"><thead><tr><th>Type</th><th>Topic</th><th>Test</th><th>Pre-Test</th><th>Post-Test</th><th>Date & Time</th></tr></thead><tbody>{(employee.training || []).map((t, idx) => (<tr key={idx}><td>{t.type}</td><td>{t.topic}</td><td>{t.test}</td><td><button style={{ backgroundColor: '#b5f9b7ff' }}>{t.preTest}</button></td><td><button style={{ backgroundColor: '#b5f9b7ff' }}>{t.postTest}</button></td><td>{t.dateTime}</td></tr>))}</tbody></table></div>
          }
        />
        <Route index element={<Navigate to={`${basePath}/deployment`} replace />} />
      </Routes>
    </div>
  );
}