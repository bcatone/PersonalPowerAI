import React from 'react';
import iconError from '../../images/iconError.svg';
import iconSuccess from '../../images/iconSuccess.svg';
import '../InfoTooltip/InfoTooltip.css';

function InfoTooltipEditProfile(props) {
  return (
    <div
      className={`popup popup_type_tooltip ${props.isOpen ? 'popup_opened' : ''}`}
      onClick={props.onCloseOverlay}
    >
      <div className="popup__container">
        {props.isUpdate ? (
          <>
            <img
              src={`${iconSuccess}`}
              alt="Your profile is succesfully updated!"
              className="popup__signup-image"
            />
            <p className="popup__signup-title">Your profile is succesfully updated!</p>
          </>
        ) : (
          <>
            <img
              src={`${iconError}`}
              alt="Something went wrong. Try again later!"
              className="popup__signup-image"
            />
            <p className="popup__signup-title">Something went wrong. Try again later!</p>
          </>
        )}

        <button type="button" className="popup__close-button" onClick={props.onClose}></button>
      </div>
    </div>
  );
}

export default InfoTooltipEditProfile;
