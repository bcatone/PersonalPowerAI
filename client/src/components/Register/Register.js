import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as api from '../../utils/MainApi';
import { setIsLoading } from '../../redux/actions/isLoadingActions';
import { setUser } from '../../redux/actions/userActions';
import useForm from '../Form/useForm';
import useInfoTooltipPopup from '../common/InfoTooltipPopup/useInfoTooltipPopup';
import Form from '../Form/Form';
import InfoTooltipPopup from '../common/InfoTooltipPopup/InfoToolTipPopup';
import { PATTERN_REGEX_EMAIL } from '../../utils/constants';
import '../Form/Form.css';

function Register({
  // isLoading, 
  // registrationUser 
}) {
  const {
    enteredValues,
    errors,
    handleChangeInput,
    isFormValid
  } = useForm();

  const {
    isOpen,
    setIsOpen,
    isSuccess,
    setIsSuccess,
    closePopupByOverlay
  } = useInfoTooltipPopup();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();

    dispatch(setIsLoading(true));
    api
      .loginUser(enteredValues)
      .then((res) => {
        dispatch(setUser(res)); // Logs in the user
        setIsSuccess(true);
        navigate("/dashboard"); // This would currently redirect before the success popup appears
      })
      .catch((error) => {
        console.error(error);
        setIsSuccess(false);
      })
      .finally(() => {
        setIsOpen(true);
        dispatch(setIsLoading(false));
      });
  };

  // function setEditUserInfo(event) {
  //   event.preventDefault();
  //   registrationUser({
  //     name: enteredValues.name,
  //     email: enteredValues.email,
  //     password: enteredValues.password,
  //     expertise: enteredValues.expertise,
  //     gender: enteredValues.gender,
  //     timezone: enteredValues.timezone
  //   });

  //   // Redirect to the /game route
  //   navigate('/game');
  // }

  // Function to handle the "Send us a mail!" link click
  function handleSendEmail() {
    // Redirect the user to their email client
    window.location.href = 'mailto:personalpowerai@gmail.com';
  }

  return (
    <>
      <Form
        link="/signin"
        title="Nice to meet you!"
        buttonText="REGISTER AND GET A MATCH!"
        formQues="Already Registered?"
        linkText=" Sign In"
        formQuesMentor="Are you a Mentor?"
        linkTextMentor=" Send us a mail!"
        onClickLinkTextMentor={handleSendEmail}
        // onSubmit={setEditUserInfo}
        onSubmit={handleRegistrationSubmit}
        isDisabledButton={!isFormValid}
      // isLoading={isLoading}
      >
        <label className="form__label">
          Name
          <input
            className="form__input"
            name="name"
            minLength="2"
            maxLength="40"
            placeholder="Your name"
            type="text"
            onChange={handleChangeInput}
            value={enteredValues.name || ''}
            required
          />
          <span className="form__input-error">{errors.name}</span>
        </label>
        <label className="form__label">
          E-mail
          <input
            className="form__input"
            name="email"
            placeholder="Your Email"
            type="email"
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
            className="form__input"
            name="password"
            placeholder="Create a Password"
            type="password"
            onChange={handleChangeInput}
            value={enteredValues.password || ''}
            minLength="6"
            maxLength="12"
            required
          />
          <span className="form__input-error">{errors.password}</span>
        </label>
        {/* <label className="form__label">
          Password Confirmation
          <input
            className="form__input"
            name="password_confirmation"
            placeholder="Confirm Your Password"
            type="password"
            onChange={handleChangeInput}
            value={enteredValues.password_confirmation || ''}
            minLength="6"
            maxLength="12"
            required
          />
          <span className="form__input-error">{errors.password_confirmation}</span>
        </label> */}
        <label className="form__label">
          Field of Expertise
          <input
            className="form__input"
            name="expertise"
            minLength="3"
            maxLength="45"
            placeholder="Profession or Interest"
            type="text"
            onChange={handleChangeInput}
            value={enteredValues.expertise || ''}
            required
          />
          <span className="form__input-error">{errors.expertise}</span>
        </label>
        <label className="form__label">
          Gender
          <input
            className="form__input"
            name="gender"
            minLength="3"
            maxLength="40"
            placeholder="female"
            type="text"
            onChange={handleChangeInput}
            value={enteredValues.gender || ''}
            required
          />
          <span className="form__input-error">{errors.gender}</span>
        </label>
        <label className="form__label">
          Timezone
          <input
            className="form__input"
            name="timezone"
            minLength="3"
            maxLength="6"
            placeholder="GMT-7"
            type="text"
            onChange={handleChangeInput}
            value={enteredValues.timezone || ''}
            required
          />
          <span className="form__input-error">{errors.timezone}</span>
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

export default Register;
