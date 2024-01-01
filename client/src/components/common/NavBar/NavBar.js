// This is the same code as DashboardSection.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../NavBar/NavBar.css';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../../redux/actions/authActions';

function NavBar() {
  const dispatch = useDispatch();

  // Move this function if logout option occurs elsewhere
  const handleLogoutUser = () => {
    dispatch(clearUser());
  };

  return (
    <div className="navbar">
      {/* <Link to="me/dashboard"><h3 className="grid-item-name dark">Dashboard</h3></Link> */}
      <div className="grid-main-links">
        <Link className="grid-link grid-link_state_active" to="me/dashboard">
          Dashboard
        </Link>
        <Link className="grid-link" to="me/profile">
          Profile
        </Link>
        <Link className="grid-link" to="me/match-list">
          Your Matches
        </Link>
        <Link className="grid-link" to="me/learning-community">
          Learning Group
        </Link>
        <Link className="grid-link" to="me/messages">
          Messages
        </Link>
        <Link className="grid-link" to="me/mentorbot">
          AI Mentor
        </Link>
        <Link className="grid-link" to="me/projects">
          Projects
        </Link>
      </div>
      <div className="grid-bottom-links">
        <Link className="grid-link" to="me/settings">
          Settings
        </Link>
        <Link className="grid-link" to="me/projects">
          Donate
        </Link>
        <p className="grid-link" onClick={handleLogoutUser}>
          Sign Out
        </p>
      </div>
    </div>
  );
}

export default NavBar;
