import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';
import NavBar from '../common/NavBar/NavBar';

function Navigation({ handleClose }) {
  // Change color on active link
  const setActiveColorLink = ({ isActive }) =>
    isActive ? 'navigation__burger-link_active' : 'navigation__burger-link';

  return (
    <div className="navigation small-screen">
      <div className="navigation__overlay-container"></div>
      <div className="navigation__burger">
        <button className="navigation__close-button" onClick={handleClose}></button>
        <nav className="navigation__burger-links">
          <NavBar />
        </nav>
        <Link to="/profile" className="navigation__profile"></Link>
      </div>
    </div>
  );
}

export default Navigation;

// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import account from '../../images/robot.svg';
// import './Navigation.css';

// function Navigation({ handleClose }) {
//   // change color on active link
//   const setActiveColorLink = ({ isActive }) =>
//     isActive ? 'navigation__movies-link_active' : 'navigation__movies-link';

//   return (
//     <div className="navigation">
//       <div className="navigation__overlay-container"></div>
//       <div className="navigation__movies">
//         <button className="navigation__close-button" onClick={handleClose}></button>
//         <nav className="navigation__movies-links">
//           <NavLink className={setActiveColorLink} exact to="/" onClick={handleClose}>
//             Main
//           </NavLink>
//           <NavLink className={setActiveColorLink} to="/dashboard" onClick={handleClose}>
//             Dashboard
//           </NavLink>
//           <NavLink className={setActiveColorLink} to="/chat" onClick={handleClose}>
//             Chat
//           </NavLink>
//         </nav>
//         <Link to="/profile" className="navigation__profile">
//           <img src={account} alt="profile" />
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Navigation;
