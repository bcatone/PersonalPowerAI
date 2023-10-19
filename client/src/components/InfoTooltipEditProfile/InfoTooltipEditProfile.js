import React from "react"
import iconError from "../../images/iconError.svg"
import iconSuccess from "../../images/iconSuccess.svg"
import "../InfoTooltip/InfoTooltip.css"

function InfoTooltipEditProfile(props) {
  return (
    <div
      className={`popup popup_type_tooltip ${
        props.isOpen ? "popup_opened" : ""
      }`}
      onClick={props.onCloseOverlay}
    >
      <div className="popup__container">
        {props.isUpdate ? (
          <>
            <img
              src={`${iconSuccess}`}
              alt="Редактирование прошло успешно."
              className="popup__signup-image"
            />
            <p className="popup__signup-title">
              Редактирование прошло успешно!
            </p>
          </>
        ) : (
          <>
            <img
              src={`${iconError}`}
              alt="Редактирование не было выполнено."
              className="popup__signup-image"
            />
            <p className="popup__signup-title">
              Что-то пошло не так. Попробуйте ещё раз!
            </p>
          </>
        )}

        <button
          type="button"
          className="popup__close-button"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  )
}

export default InfoTooltipEditProfile
