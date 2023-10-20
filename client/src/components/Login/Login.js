import React from 'react';
import Form from '../Form/Form';
import useForm from '../../hooks/useForm';
import '../Form/Form.css';
import { PATTERN_REGEX_EMAIL } from '../../utils/constants';

function Login({ onAuthorization, isLoading }) {
  const { enteredValues, errors, handleChangeInput, isFormValid } = useForm();

  function setEditUserInfo(event) {
    event.preventDefault();
    onAuthorization({
      email: enteredValues.email,
      password: enteredValues.password
    });
  }

  return (
    <Form
      title="Welcome back!!"
      buttonText="Login"
      linkText=" Register"
      formQues="No account yet?"
      link="/register"
      isDisablButton={!isFormValid}
      isLoading={isLoading}
      onSubmit={setEditUserInfo}
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
  );
}

export default Login;
