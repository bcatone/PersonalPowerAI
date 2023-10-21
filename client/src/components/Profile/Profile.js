import React, { useEffect, useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom'; // Import Navigate from 'react-router-dom'
import Header from '../Header/Header';
import useForm from '../../hooks/useForm';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { PATTERN_REGEX_EMAIL } from '../../utils/constants';
import './Profile.css';

function Profile({ loggedIn, isLoading, onUpdateUser, signOut }) {
  const currentUser = useContext(CurrentUserContext);
  const { enteredValues, errors, handleChangeInput, isFormValid, resetForm } = useForm();
  const [isLastValues, setIsLastValues] = useState(false);

  useEffect(() => {
    if (currentUser.name === enteredValues.name && currentUser.email === enteredValues.email) {
      setIsLastValues(true);
    } else {
      setIsLastValues(false);
    }
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
      email: enteredValues.email,
      expertise: enteredValues.expertise,
      gender: enteredValues.gender,
      timezone: enteredValues.timezone
    });
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="profile">
        <h3 className="profile__title">Hello, {currentUser.name}!</h3>
        <form className="profile__forma" id="form" onSubmit={setEditUserInfo} noValidate>
          <label className="profile__label">
            Name
            <input
              className="profile__input"
              name="name"
              minLength="2"
              maxLength="40"
              placeholder="Your Name"
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
              placeholder="mail@mail.com"
              type="email"
              onChange={handleChangeInput}
              pattern={PATTERN_REGEX_EMAIL}
              value={enteredValues.email || ''}
              required
            />
            <span className="profile__input-error">{errors.email}</span>
          </label>
          <div className="profile__line"></div>
          <label className="profile__label">
            Field of Expertise
            <input
              className="profile__input"
              name="expertise"
              minLength="2"
              maxLength="45"
              placeholder="Profession/Interest"
              type="text"
              onChange={handleChangeInput}
              value={enteredValues.expertise || ''}
              required
            />
            <span className="profile__input-error">{errors.expertise}</span>
          </label>
          <div className="profile__line"></div>
          <label className="profile__label">
            Gender
            <input
              className="profile__input"
              name="gender"
              minLength="2"
              maxLength="40"
              placeholder="female"
              type="text"
              onChange={handleChangeInput}
              value={enteredValues.timezone || ''}
              required
            />
            <span className="profile__input-error">{errors.gender}</span>
          </label>
          <div className="profile__line"></div>
          <label className="profile__label">
            Timezone
            <input
              className="profile__input"
              name="timezone"
              minLength="3"
              maxLength="6"
              placeholder="GMT-7"
              type="text"
              onChange={handleChangeInput}
              value={enteredValues.timezone || ''}
              required
            />
            <span className="profile__input-error">{errors.timezone}</span>
          </label>
          <div className="profile__line"></div>
          <div className="profile__button-container">
            <button
              type="submit"
              disabled={!isFormValid ? true : false}
              className={
                !isFormValid || isLoading || isLastValues
                  ? 'profile__button-save form__button-save_inactive'
                  : 'profile__button-save'
              }
            >
              EDIT PROFILE
            </button>
            <Link to="/game">
              <button
                type="button"
                disabled={!isFormValid ? true : false}
                className="profile__button-play"
              >
                PLAY AGAIN
              </button>
            </Link>
          </div>
          <Link className="profile__logout" to="/profile" type="button" onClick={signOut}>
            Sign Out
          </Link>
          <Link className="profile__delete" to="/profile" type="button" onClick={signOut}>
            Delete Account
          </Link>
        </form>
      </section>
    </>
  );
}

export default Profile;

// import React, { useEffect, useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../Header/Header';
// import useForm from '../../hooks/useForm';
// import CurrentUserContext from '../../contexts/CurrentUserContext';
// import { PATTERN_REGEX_EMAIL } from '../../utils/constants';
// import './Profile.css';

// function Profile({ loggedIn, isLoading, onUpdateUser, signOut }) {
//   const currentUser = useContext(CurrentUserContext);
//   const { enteredValues, errors, handleChangeInput, isFormValid, resetForm } = useForm();
//   const [isLastValues, setIsLastValues] = useState(false);

//   useEffect(() => {
//     if (currentUser.name === enteredValues.name && currentUser.email === enteredValues.email) {
//       setIsLastValues(true);
//     } else {
//       setIsLastValues(false);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [enteredValues]);

//   useEffect(() => {
//     if (currentUser) {
//       resetForm(currentUser);
//     }
//   }, [currentUser, resetForm]);

//   function setEditUserInfo(event) {
//     event.preventDefault();
//     onUpdateUser({
//       name: enteredValues.name,
//       email: enteredValues.email,
//       expertise: enteredValues.expertise,
//       gender: enteredValues.gender,
//       timezone: enteredValues.timezone
//     });
//   }

//   return (
//     <>
//       <Header loggedIn={loggedIn} />
//       <section className="profile">
//         <h3 className="profile__title">Hello, {currentUser.name}!</h3>
//         <form className="profile__forma" id="form" onSubmit={setEditUserInfo} noValidate>
//           <label className="profile__label">
//             Name
//             <input
//               className="profile__input"
//               name="name"
//               minLength="2"
//               maxLength="40"
//               placeholder="Your Name"
//               type="text"
//               onChange={handleChangeInput}
//               value={enteredValues.name || ''}
//               required
//             />
//             <span className="profile__input-error">{errors.name}</span>
//           </label>
//           <div className="profile__line"></div>
//           <label className="profile__label">
//             E-mail
//             <input
//               className="profile__input"
//               name="email"
//               placeholder="mail@mail.com"
//               type="email"
//               onChange={handleChangeInput}
//               pattern={PATTERN_REGEX_EMAIL}
//               value={enteredValues.email || ''}
//               required
//             />
//             <span className="profile__input-error">{errors.email}</span>
//           </label>
//           <div className="profile__line"></div>
//           <label className="profile__label">
//             Field of Expertise
//             <input
//               className="profile__input"
//               name="expertise"
//               minLength="2"
//               maxLength="45"
//               placeholder="Profession/Interest"
//               type="text"
//               onChange={handleChangeInput}
//               value={enteredValues.expertise || ''}
//               required
//             />
//             <span className="profile__input-error">{errors.expertise}</span>
//           </label>
//           <div className="profile__line"></div>
//           <label className="profile__label">
//             Gender
//             <input
//               className="profile__input"
//               name="gender"
//               minLength="2"
//               maxLength="40"
//               placeholder="female"
//               type="text"
//               onChange={handleChangeInput}
//               value={enteredValues.timezone || ''}
//               required
//             />
//             <span className="profile__input-error">{errors.gender}</span>
//           </label>
//           <div className="profile__line"></div>
//           <label className="profile__label">
//             Timezone
//             <input
//               className="profile__input"
//               name="timezone"
//               minLength="3"
//               maxLength="6"
//               placeholder="GMT-7"
//               type="text"
//               onChange={handleChangeInput}
//               value={enteredValues.timezone || ''}
//               required
//             />
//             <span className="profile__input-error">{errors.timezone}</span>
//           </label>
//           <div className="profile__line"></div>
//           <div className="profile__button-container">
//             <button
//               type="submit"
//               disabled={!isFormValid ? true : false}
//               className={
//                 !isFormValid || isLoading || isLastValues
//                   ? 'profile__button-save form__button-save_inactive'
//                   : 'profile__button-save'
//               }
//               // add class for real inactive button form__button-save_inactive
//             >
//               EDIT PROFILE
//             </button>
//             <button
//               type="button"
//               disabled={!isFormValid ? true : false}
//               className="profile__button-play"
//             >
//               PLAY AGAIN
//             </button>
//           </div>
//           <Link className="profile__logout" to="/profile" type="button" onClick={signOut}>
//             Sign Out
//           </Link>
//           <Link className="profile__delete" to="/profile" type="button" onClick={signOut}>
//             Delete Account
//           </Link>
//         </form>
//       </section>
//     </>
//   );
// }

// export default Profile;
