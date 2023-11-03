import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import PropTypes from 'prop-types';

const Header = ({ isLoggedIn }) => {
  const location = useLocation();
  const isMainRoute = location.pathname === '/'; // Replace '/main' with the actual route of your Main page

  return (
    <header className={`header${isMainRoute ? ' header_theme_purple' : ' header_theme_purple'}`}>
      <div className="header__container limits-container">
        <Link to="/">
          <img src={logo} alt="logotype Personal Power" className="header__logo" />
        </Link>
        {isLoggedIn ? ( // If the user is logged in
          <Link to="/dashboard" className="header__link">
            Dashboard
          </Link>
        ) : isMainRoute ? ( // Only show "Sign In" on the Main page
          <Link to="/signin" className="header__link">
            Sign In
          </Link>
        ) : null}{' '}
        {/* If not Main and not logged in, render nothing */}
        <Navigation isLoggedIn={isLoggedIn} />
      </div>
    </header>
  );
};

export default Header;

// Define PropTypes
Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Header.css';
// import logo from '../../images/logo.svg';
// import Navigation from '../Navigation/Navigation';
// import PropTypes from 'prop-types';

// const Header = ({ isLoggedIn }) => {
//   const location = useLocation();
//   const isGameRoute = location.pathname === '/game';

//   return (
//     <header className={`header${isGameRoute ? ' header_theme_purple' : ' header_theme_purple'}`}>
//       <div className="header__container limits-container">
//         <Link to="/">
//           <img src={logo} alt="logotype Personal Power" className="header__logo" />
//         </Link>
//         <Navigation isLoggedIn={isLoggedIn} />
//       </div>
//     </header>
//   );
// };

// export default Header;

// // Define PropTypes
// Header.propTypes = {
//   isLoggedIn: PropTypes.bool.isRequired
// };

// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import logo from '../../images/logo.svg';
// import Navigation from '../Navigation/Navigation';
// import menu from '../../images/menu-button.png';
// import './Header.css';

// function Header({ loggedIn }) {
//   const setActiveColorLink = ({ isActive }) =>
//     isActive ? 'header__button_active' : 'header__button';

//   const [isOpened, setIsOpened] = React.useState(false);

//   function handleOpen() {
//     setIsOpened(true);
//   }

//   function handleClose() {
//     setIsOpened(false);
//   }

//   return (
//     <>
//       {!loggedIn ? (
//         <header className="header" id="header">
//           <Link to="/" className="logo">
//             <img src={logo} alt="Лого" />
//           </Link>
//           <div className="header__button-wrapper">
//             <Link to="/signup" className="header__button">
//               Регистрация
//             </Link>
//             <Link to="/signin" className="header__button header__button-black">
//               Войти
//             </Link>
//           </div>
//         </header>
//       ) : (
//         <header className="header header_white">
//           <Link to="/" className="logo">
//             <img src={logo} alt="Лого" />
//           </Link>
//           <div className="header__button-wrapper-items">
//             <NavLink className={setActiveColorLink} to="/movies">
//               Фильмы
//             </NavLink>
//             <NavLink className={setActiveColorLink} to="/saved-movies">
//               Сохранённые фильмы
//             </NavLink>
//           </div>
//           <div className="header__button-wrapper">
//             <Link to="/profile" className="header__account-button">
//               <img className="header__account-image" src={account} alt="аккаунт" />
//             </Link>
//             <button className="header__menu-button" onClick={handleOpen}>
//               <img src={menu} alt="меню" />
//             </button>
//           </div>
//           {isOpened ? <Navigation handleClose={handleClose} /> : ''}
//         </header>
//       )}
//     </>
//   );
// }

// export default Header;
