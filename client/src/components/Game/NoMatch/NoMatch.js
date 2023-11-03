import React from 'react';
import './NoMatch.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import whinking from '../../../images/winking-face.png';

function NoMatch() {
  return (
    <section className="match">
      <Link to="/" className="logo logo_place_match">
        <img src={logo} alt="logo Personal Power" />
      </Link>
      <div className="match__wrapper">
        <div className="match__text-wrapper">
          <h1 className="match__title">You are on the waiting list! Meanwhile...</h1>
          <img className="whinking" src={whinking} alt="whinking face" />
        </div>
        <div className="match__button">
          <Link className="match__link" to="/mentorbot">
            UNLEASH AI MENTOR AVATAR!
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NoMatch;
