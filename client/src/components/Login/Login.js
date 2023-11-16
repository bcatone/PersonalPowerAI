import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useForm from '../Form/useForm';
import useInfoTooltipPopup from '../common/InfoTooltipPopup/useInfoTooltipPopup';
import * as api from '../../utils/MainApi';
import { setIsLoading } from '../../redux/actions/isLoadingActions';
import { setUser } from '../../redux/actions/authActions';
import Form from '../Form/Form';
import InfoTooltipPopup from '../common/InfoTooltipPopup/InfoToolTipPopup';

import { PATTERN_REGEX_EMAIL } from '../../utils/constants';
import '../Form/Form.css';


function Login({ onAuthorization, isLoading }) {
  const { enteredValues, errors, handleChangeInput, isFormValid } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    isOpen,
    setIsOpen,
    isSuccess,
    setIsSuccess,
    closePopupByOverlay
  } = useInfoTooltipPopup();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    dispatch(setIsLoading(true));
    api
      .loginUser(enteredValues)
      .then((res) => {
        console.log(res);
        dispatch(setUser(res.user)); // Logs in the user
        localStorage.setItem('jwt', res.token);
        setIsSuccess(true);
        navigate("dashboard"); // This would currently redirect before the success popup appears
      })
      .catch((error) => {
        console.error(error);
        setIsSuccess(false);
      })
      .finally(() => {
        setIsOpen(true);
        dispatch(setIsLoading(false));
      });
  }

  // function setEditUserInfo(event) {
  //   event.preventDefault();
  //   onAuthorization({
  //     email: enteredValues.email,
  //     password: enteredValues.password
  //   });
  // }

  return (
    <>
    <Form
      title="Welcome back!!"
      buttonText="LOGIN"
      linkText=" Register"
      formQues="No account yet?"
      link="/register"
      isDisabledButton={!isFormValid}
      // isLoading={isLoading}
      // onSubmit={setEditUserInfo}
      onSubmit={handleLoginSubmit}
    >
      <label className="form__label">
        E-mail
        <input
          name="email"
          className="form__input"
          id="email-input"
          type="email"
          placeholder="Your Email"
          onChange={handleChangeInput}
          pattern={PATTERN_REGEX_EMAIL}
          value={enteredValues.email || ''}
          required
        />
        <span className="form__input-error">{errors.email}</span>
      </label>
      <label className="form__label">
        Password
        <input
          name="password"
          className="form__input"
          id="password-input"
          type="password"
          placeholder="Your password"
          onChange={handleChangeInput}
          value={enteredValues.password || ''}
          minLength="6"
          maxLength="12"
          required
        />
        <span className="form__input-error">{errors.password}</span>
      </label>
    </Form>
    <InfoTooltipPopup
        isOpen={isOpen}
        isSuccess={isSuccess}
        successText={{ text: "Welcome to the next level of mentorship!", alt: "You are successfully registered." }}
        failureText={{ text: "Something went wrong.", alt: "Registration failed." }}
        onClose={() => setIsOpen(false)}
        onCloseOverlay={closePopupByOverlay}
      />
    </>
  );
}

export default Login;
