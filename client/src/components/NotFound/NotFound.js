import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const path = useNavigate();

  function goNavigate() {
    path(-2);
  }

  return (
    <section className="not-found">
      <h2 className="not-found__code">404</h2>
      <p className="not-found__code-description">Page Not Found</p>
      <div className="not-found__icon"></div>
      <button onClick={goNavigate} className="not-found__link">
        Return
      </button>
    </section>
  );
}

export default NotFound;
