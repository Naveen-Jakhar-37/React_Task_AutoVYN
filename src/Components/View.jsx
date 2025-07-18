import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import personIcon from '../assets/images/person-fill.svg';
import widthIcon from '../assets/images/fi-sr-line-width.svg';
import searchIcon from '../assets/images/search.svg';
import '../Styles/View.css';

function View({ showActive, setShowActive, searchTerm, setSearchTerm, users }) {
  const navigate = useNavigate();
  const location = useLocation();

  const activeCount = users.filter((u) => u.active).length;
  const inactiveCount = users.length - activeCount;

  const viewMode = location.pathname.startsWith('/stations') ? 'stations' : 'operators';

  return (
    <div className="view">
      <div className="button-container">
        <label className="views">View:</label>
        <button
          onClick={() => navigate('/operators')}
          className={`btn left ${viewMode === 'operators' ? 'active' : ''}`}
        >
          <div>
            <img src={personIcon} alt="Operators" />
          </div>
          Operators
        </button>
        <button
          onClick={() => navigate('/stations')}
          className={`btn right ${viewMode === 'stations' ? 'active' : ''}`}
        >
          <div>
            <img src={widthIcon} alt="Stations" />
          </div>
          Stations
        </button>
      </div>

      <div className="search">
        <div className={`status-toggle${showActive ? ' on' : ''}`} onClick={() => setShowActive((prev) => !prev)}>
          <span className={`status-label left${!showActive ? ' active' : ''}`}>Active ({activeCount})</span>
          <div className="switch">
            <div className="knob" />
          </div>
          <span className={`status-label right${showActive ? ' active' : ''}`}>Inactive ({inactiveCount})</span>
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