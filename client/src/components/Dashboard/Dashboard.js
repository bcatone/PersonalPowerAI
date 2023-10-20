import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import useForm from '../../hooks/useForm';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { PATTERN_REGEX_EMAIL } from '../../utils/constants';
import './Dashboard.css';

function Dashboard({ loggedIn, isLoading, onUpdateUser, signOut }) {
  const currentUser = useContext(CurrentUserContext);
  const { enteredValues, errors, handleChangeInput, isFormValid, resetForm } = useForm();
  const [isLastValues, setIsLastValues] = useState(false);

  useEffect(() => {
    if (currentUser.name === enteredValues.name && currentUser.email === enteredValues.email) {
      setIsLastValues(true);
    } else {
      setIsLastValues(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enteredValues]);

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  function setEditUserInfo(event) {
    event.preventDefault();
    onUpdateUser({
      name: enteredValues.name,
      email: enteredValues.email
    });
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="profile">
        <h3 className="profile__title">Hello, {currentUser.name}!</h3>
        <form className="profile__forma" id="form" onSubmit={setEditUserInfo} noValidate>
          <label className="profile__label">
            Имя
            <input
              className="profile__input"
              name="name"
              minLength="2"
              maxLength="40"
              placeholder="Ваше имя"
              type="text"
              onChange={handleChangeInput}
              value={enteredValues.name || ''}
              required
            />
            <span className="profile__input-error">{errors.name}</span>
          </label>
          <div className="profile__line"></div>
          <label className="profile__label">
            E-mail
            <input
              className="profile__input"
              name="email"
              placeholder="Ваш Email"
              type="email"
              onChange={handleChangeInput}
              pattern={PATTERN_REGEX_EMAIL}
              value={enteredValues.email || ''}
              required
            />
            <span className="profile__input-error">{errors.email}</span>
          </label>
          <button
            type="submit"
            disabled={!isFormValid ? true : false}
            className={
              !isFormValid || isLoading || isLastValues
                ? 'profile__button-save form__button-save_inactive'
                : 'profile__button-save'
            }
          >
            Редактировать
          </button>
          <Link className="profile__logout" to="/profile" type="button" onClick={signOut}>
            Выйти из аккаунта
          </Link>
        </form>
      </section>
    </>
  );
}

export default Dashboard;
