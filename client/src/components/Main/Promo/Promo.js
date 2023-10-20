import React from 'react';
import './Promo.css';
import { Link } from 'react-router-dom';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__wrapper">
        <div className="promo__text-wrapper">
          <h1 className="promo__title">Unleash Your Personal Power Mentorship Experience</h1>
        </div>
        <div className="promo__button">
          <Link className="promo__link" to="/register">
            START YOUR JOURNEY
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Promo;
