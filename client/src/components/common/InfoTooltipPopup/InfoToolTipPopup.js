import React from "react";
import useInfoTooltipPopup from "./useInfoTooltipPopup";
import iconError from '../../../images/iconError.svg';
import iconSuccess from '../../../images/iconSuccess.svg';
import './InfoTooltipPopup.css';


function InfoTooltipPopup({
    isOpen,
    isSuccess,
    successText, 
    failureText,
    onClose,
    onCloseOverlay
}) {
 

    if (!isOpen) return null;

    return (
        <div
          className={`popup popup_type_tooltip ${isOpen ? 'popup_opened' : ''}`}
          onClick={onCloseOverlay}
        >
          <div className="popup__container">
            {isSuccess ? (
              <>
                <img
                  src={`${iconSuccess}`}
                  alt={successText.alt}
                  className="popup__signup-image"
                />
                <p className="popup__signup-title">{successText.text}</p>
              </>
            ) : (
              <>
                <img src={`${iconError}`} alt={failureText.alt} className="popup__signup-image" />
                <p className="popup__signup-title">{failureText.text}</p>
              </>
            )}
    
            <button type="button" className="popup__close-button" onClick={onClose}></button>
          </div>
        </div>
      );
}

export default InfoTooltipPopup;