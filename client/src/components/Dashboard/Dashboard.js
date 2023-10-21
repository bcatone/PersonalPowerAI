import React from 'react';
import Header from '../Header/Header';
import { Link, NavLink } from 'react-router-dom';
import Chat from '../Chat/Chat';
// import useForm from '../../hooks/useForm';
// import CurrentUserContext from '../../contexts/CurrentUserContext';
import './Dashboard.css';
import Schedule from './Schedules/Schedules';

function Dashboard() {
  return (
    <>
      <Header />
      <section className="dashboard">
        <div class="grid-container">
          <div class="grid-item grid-item-dashboard">
            <h3 class="grid-item-name dark">Dashboard</h3>
            <div className="grid-main-links">
              <Link className="grid-link" to="/profile">
                Profile
              </Link>
              <Link className="grid-link" to="/mentors">
                Mentors
              </Link>
              <Link className="grid-link" to="/learning-community">
                Learning Community
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
                signOut
              </Link>
            </div>
          </div>
          <div className="grid-item grid-item-progress">
            <h3 className="grid-item-name">Progress</h3>
          </div>
          <div className="grid-item grid-item-messages">
            <h3 className="grid-item-name">Inbox Messages</h3>
            <div class="grid-item grid-item-messages">
              <Chat />
            </div>
          </div>
          <div className="grid-item grid-item-challenges">
            <h3 className="grid-item-name dark">Daily Challenges</h3>
            <p className="challenge-text">
              Pick a day to actively practice empathy. Make an effort to see situations from other
              people's perspectives, both at work and in your personal life. Engage in conversations
              with colleagues and friends, trying to understand their feelings and needs.{' '}
              <span className="more-link">read more...</span>
            </p>
          </div>
          <div className="grid-item grid-item-schedules">
            <h3 className="grid-item-name">Your Schedule</h3>
            <Schedule />
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
