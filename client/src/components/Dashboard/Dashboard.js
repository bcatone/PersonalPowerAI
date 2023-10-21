import React, { useState } from 'react';
import Header from '../Header/Header';
import { Link, NavLink } from 'react-router-dom';
import Chat from '../Chat/Chat';
// import useForm from '../../hooks/useForm';
// import CurrentUserContext from '../../contexts/CurrentUserContext';
import './Dashboard.css';
import Schedule from './Schedules/Schedules';
import Footer from '../Footer/Footer';

function Dashboard() {
  // Step 1: Create a state variable for the popup visibility
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Step 2: Create a function to toggle the popup visibility
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

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
            <p className="progress-text">
              Track Your Progress: This allows you to see how far you've come and identify patterns
              of improvement.
            </p>
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
              <div className="more-link" onClick={togglePopup}>
                read more...
              </div>
            </p>
            {/* Step 3: Conditionally render the popup */}
            {isPopupVisible && (
              <div className="popup-hint">
                {/* Popup content */}
                <div className="popup__container">
                  <p className="popup-hint-text">
                    Set Clear Goals: Define specific objectives for each challenge to ensure you
                    know what skill or behavior you're working on.
                  </p>
                  <p className="popup-hint-text">
                    Stay Consistent: Commit to regular practice to build and reinforce your soft
                    skills over time.
                  </p>
                  <p className="popup-hint-text">
                    Reflect and Learn: After each challenge, take time to reflect on your
                    experiences and what you've learned.
                  </p>
                  <p className="popup-hint-text">
                    Seek Feedback: If appropriate, ask for feedback from others to gain insights
                    into your performance and areas for improvement.
                  </p>
                  <p className="popup-hint-text">
                    Celebrate Progress: Acknowledge and celebrate your successes, no matter how
                    small, to stay motivated and encouraged in your growth journey.
                  </p>
                  <button className="button button-hint" onClick={togglePopup}>
                    CLOSE
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="grid-item grid-item-schedules">
            <h3 className="grid-item-name">Your Schedule</h3>
            <Schedule />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Dashboard;
