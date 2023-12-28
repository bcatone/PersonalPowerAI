import React from 'react';
import NavBar from '../common/NavBar/NavBar';
import Chat from '../Chat/Chat';
import MeetingSchedule from './Schedules/MeetingSchedule';
import DailyChallenges from './DailyChallenges'; // Import the new component
import './Dashboard.css';

function Dashboard() {
  return (
    <>
      <section className="dashboard">
        <div className="grid-container">
          <div className="grid-item grid-item-navbar">
            <NavBar />
          </div>
          <div className="grid-item grid-item-progress">
            <h3 className="grid-item-name">Progress</h3>
            <p className="progress-text">
              Track Your Progress: This allows you to see how far you've come and identify patterns
              of improvement.
            </p>
          </div>
          <div className="grid-item grid-item-messages">
            <h3 className="grid-item-name">Inbox Messages</h3>
            <Chat />
          </div>
          {/* Replace the Daily Challenges section with the new component */}
          <DailyChallenges />
          <div className="grid-item grid-item-schedules">
            <h3 className="grid-item-name">Your Schedule</h3>
            <MeetingSchedule />
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
