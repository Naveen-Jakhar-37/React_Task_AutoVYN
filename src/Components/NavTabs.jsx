import React, { useState } from "react";
import "../Styles/Navbar.css";

const tabs = [
  "AREA DASHBOARD",
  "DEPLOYMENT",
  "ON THE JOB TRAINING",
  "SKILL MATRIX",
  "REPORTS"
];

const NavTabs = () => {
  const [active, setActiveTab] = useState("AREA DASHBOARD");

  return (
    <div className="nav-tabs">
      {tabs.map((tab) => (
        <a
          key={tab}
          href="#"
          className={`nav-tab ${active === tab ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            setActiveTab(tab);
          }}
        >
          {tab}
        </a>
      ))}
    </div>
  );
};

export default NavTabs;