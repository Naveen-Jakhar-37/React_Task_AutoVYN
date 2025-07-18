
import React, { useState } from "react";
import personIcon from "../assets/images/person-fill.svg";
import widthIcon from "../assets/images/fi-sr-line-width.svg";
import searchIcon from "../assets/images/search.svg";
import "../Styles/View.css";

function View({
  viewMode,
  setViewMode,
  showActive,
  setShowActive,
  searchTerm,
  setSearchTerm,
  users
}) {
  const activeCount = users.filter((u) => u.active).length;
  const inactiveCount = users.length - activeCount;

  return (
    <div className="view">
      {/* View Switch Buttons */}
      <div className="button-container">
        <label className="views">View:</label>
        <button
          className={`btn left ${viewMode === "operators" ? "active" : ""}`}
          onClick={() => setViewMode("operators")}
        >
          <div>
            <img src={personIcon} alt="Operators" />
          </div>
          Operators
        </button>
        <button
          className={`btn right ${viewMode === "stations" ? "active" : ""}`}
          onClick={() => setViewMode("stations")}
        >
          <div>
            <img src={widthIcon} alt="Stations" />
          </div>
          Stations
        </button>
      </div>

      {/* Active/Inactive Toggle + Search */}
      <div className="search">
        <div
          className={`status-toggle${showActive ? " on" : ""}`}
          onClick={() => setShowActive((prev) => !prev)}
        >
          <span className={`status-label left${showActive ? " active" : ""}`}>
            Active ({activeCount})
          </span>
          <div className="switch">
            <div className="knob" />
          </div>
          <span
            className={`status-label right${!showActive ? " active" : ""}`}
          >
            Inactive ({inactiveCount})
          </span>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search by Name, Staff ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span>
            <img src={searchIcon} alt="Search" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default View;
