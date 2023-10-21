import React from 'react';
import './Match.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import fireworks from '../../images/hurray.png';

function Match() {
  return (
    <section className="match">
      <Link to="/" className="logo logo_place_match">
        <img src={logo} alt="logo Personal Power" />
      </Link>
      <div className="match__wrapper">
        <div className="match__text-wrapper">
          <h1 className="match__title">Congrats! You have a Match!</h1>
          <img className="fireworks" src={fireworks} alt="fireworks icon" />
        </div>
        <div className="match__button">
          <Link className="match__link" to="/dashboard">
            CHECK MY DASHBOARD
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Match;
