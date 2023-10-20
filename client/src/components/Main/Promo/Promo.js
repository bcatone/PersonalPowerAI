import React from 'react';
import './Promo.css';
import { Link } from 'react-router-dom';

function Promo() {
  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      <div className="promo__how-it-works">
        <a
          href="#how-it-works"
          className="promo__how-it-works-link"
          onClick={event => handleSmoothScroll(event, 'how-it-works')}
        >
          How It Works
          <div className="promo__how-it-works-arrow"></div>
        </a>
      </div>
    </section>
  );
}

export default Promo;
