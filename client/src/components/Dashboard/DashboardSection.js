import React from 'react';
import { Link } from 'react-router-dom';

function DashboardSection() {
  return (
    <div className="grid-item grid-item-dashboard">
      <h3 className="grid-item-name dark">Dashboard</h3>
      <div className="grid-main-links">
        <Link className="grid-link" to="/profile">
          Profile
        </Link>
        <Link className="grid-link" to="/match-list">
          Your Matches
        </Link>
        <Link className="grid-link" to="/learning-community">
          Learning Group
        </Link>
        <Link className="grid-link" to="/messages">
          Messages
        </Link>
        <Link className="grid-link" to="/projects">
          Projects
        </Link>
      </div>
      <div className="grid-bottom-links">
        <Link className="grid-link" to="/settings">
          Settings
        </Link>
        <Link className="grid-link" to="/signout">
          Sign Out
        </Link>
      </div>
    </div>
  );
}

export default DashboardSection;
