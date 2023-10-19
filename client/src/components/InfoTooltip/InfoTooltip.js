import React from 'react';
import iconError from '../../images/iconError.svg';
import iconSuccess from '../../images/iconSuccess.svg';
import './InfoTooltip.css';

function InfoToolTip(props) {
  return (
    <div
      className={`popup popup_type_tooltip ${props.isOpen ? 'popup_opened' : ''}`}
      onClick={props.onCloseOverlay}
    >
      <div className="popup__container">
        {props.isSuccess ? (
          <>
            <img
              src={`${iconSuccess}`}
              alt="You are succesfully registered."
              className="popup__signup-image"
            />
            <p className="popup__signup-title">Welcome to the next level of mentorship!</p>
          </>
        ) : (
          <>
            <img src={`${iconError}`} alt="Registration failed." className="popup__signup-image" />
            <p className="popup__signup-title">Something went wrong.</p>
          </>
        )}

        <button type="button" className="popup__close-button" onClick={props.onClose}></button>
      </div>
    </div>
  );
}

export default InfoToolTip;
