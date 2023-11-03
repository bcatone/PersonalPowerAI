import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';
import logo from '../../images/logo.svg';

function Form({
  title,
  children,
  linkText,
  link,
  formQues,
  formQuesMentor,
  linkTextMentor,
  buttonText,
  isLoading,
  isDisablButton,
  onSubmit,
  onClickLinkTextMentor // New prop to handle "Send us a mail!" link click
}) {
  return (
    <section className="form">
      <Link to="/" className="logo logo_place_form">
        <img src={logo} alt="logo Personal Power" />
      </Link>
      <h3 className="form__title">{title}</h3>
      <form className="forma" id="form" onSubmit={onSubmit} noValidate>
        {children}
        <button
          type="submit"
          className={
            isDisablButton || isLoading
              ? 'form__button-save form__button-save_inactive'
              : 'form__button-save'
          }
          disabled={isDisablButton ? true : false}
        >
          {buttonText}
        </button>
      </form>
      <p className="form__text_mentor">
        {formQuesMentor}
        <a
          href="#"
          className="form__link form__link_mentor"
          onClick={e => {
            e.preventDefault();
            if (onClickLinkTextMentor) {
              onClickLinkTextMentor();
            }
          }}
        >
          {linkTextMentor}
        </a>
      </p>
      <p className="form__text">
        {formQues}
        <Link to={link} className="form__link">
          {linkText}
        </Link>
      </p>
    </section>
  );
}

export default Form;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Form.css';
// import logo from '../../images/logo.svg';

// function Form({
//   title,
//   children,
//   linkText,
//   link,
//   formQues,
//   formQuesMentor,
//   linkTextMentor,
//   buttonText,
//   isLoading,
//   isDisablButton,
//   onSubmit
// }) {
//   return (
//     <section className="form">
//       <Link to="/" className="logo logo_place_form">
//         <img src={logo} alt="logo Personal Power" />
//       </Link>
//       <h3 className="form__title">{title}</h3>
//       <form className="forma" id="form" onSubmit={onSubmit} noValidate>
//         {children}
//         <button
//           type="submit"
//           className={
//             isDisablButton || isLoading
//               ? 'form__button-save form__button-save_inactive'
//               : 'form__button-save'
//           }
//           disabled={isDisablButton ? true : false}
//         >
//           {buttonText}
//         </button>
//       </form>
//       <p className="form__text_mentor">
//         {formQuesMentor}
//         <Link to={link} className="form__link form__link_mentor">
//           {linkTextMentor}
//         </Link>
//       </p>
//       <p className="form__text">
//         {formQues}
//         <Link to={link} className="form__link">
//           {linkText}
//         </Link>
//       </p>
//     </section>
//   );
// }

// export default Form;
