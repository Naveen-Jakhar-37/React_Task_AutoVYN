import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import View from "./Components/View";
import EmployeeList from "./Components/EmployeeList";
import EmployeeDetails from "./Components/EmployeeDetails";
import Employees from './assets/images/Employees';
import './index.css';

// Sample data (you can import this from a JSON or fetch it)
// const EMPLOYEES = [
//   {
//     name: "Ujjwal Sharma",
//     id: "660638 | A0",
//     image: "1.png",
//     dob: "12/11/2000",
//     joiningDate: "10/04/2023",
//     relievingDate: "27/07/2025",
//     active: true,
//     // any other fields like deployment history…
//   },
//   {
//     name: "Raj Kumar",
//     id: "660669 | TW",
//     image: "2.png",
//     dob: "05/08/1998",
//     joiningDate: "15/02/2022",
//     relievingDate: "15/08/2025",
//     active: false,
//   },
//   // …more…
// ];

const App = () => {
  const [viewMode, setViewMode] = useState("operators");
  // const [employees] = useState(Employees);
  const [selected, setSelected] = useState(null);
  const [employees, setEmployees]     = useState(Employees);
  const [showActive, setShowActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filtered = Employees
      .filter(emp => emp.active === !showActive)
      .filter(emp => {
        const term = searchTerm.trim().toLowerCase();
        return (
          !term ||
          emp.userName.toLowerCase().includes(term) ||
          emp.id.toLowerCase().includes(term)
        );
      });

    setSelected(filtered[0] || null);
  }, [showActive, searchTerm]);
  return (
    <>
      <Header />
      <hr className="hr-line" />
      <div className="page-body">
        <Dashboard />
        <Navbar />
        <div className="page-content">
          <View
            viewMode={viewMode}
            setViewMode={setViewMode}
            showActive={showActive}
            setShowActive={setShowActive}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            users={Employees}
          />
          <div className="container">
           <EmployeeList
              employees={employees}
              viewMode={viewMode}
              showActive={showActive}
              searchTerm={searchTerm}
              selected={selected}
              onSelect={setSelected}
            />
            <EmployeeDetails employee={selected} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
