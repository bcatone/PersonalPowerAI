import React from 'react';
import Form from '../Form/Form';
import '../Form/Form.css';
import useForm from '../../hooks/useForm';
import { PATTERN_REGEX_EMAIL } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';

function Register({ isLoading, registrationUser }) {
  const { enteredValues, errors, handleChangeInput, isFormValid } = useForm();
  const navigate = useNavigate(); // Initialize the navigate function

  function setEditUserInfo(event) {
    event.preventDefault();
    registrationUser({
      name: enteredValues.name,
      email: enteredValues.email,
      password: enteredValues.password,
      expertise: enteredValues.expertise,
      gender: enteredValues.gender,
      timezone: enteredValues.timezone
    });

    // Redirect to the /game route
    navigate('/game');
  }

  return (
    <Form
      link="/signin"
      title="Nice to meet you!"
      buttonText="REGISTER AND GET A MATCH!"
      formQues="Already Registered?"
      linkText=" Sign In"
      formQuesMentor="Are you a Mentor?"
      linkTextMentor=" Sign Up Here"
      onSubmit={setEditUserInfo}
      isDisablButton={!isFormValid}
      isLoading={isLoading}
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
  );
}

export default Register;
