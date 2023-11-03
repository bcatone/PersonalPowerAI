import React from 'react';
import Carousel from './Carousel/Carousel';
import Header from '../Header/Header';
import DashboardSection from '../Dashboard/DashboardSection';
import './MatchList.css';
import { useNavigate } from 'react-router-dom';

function MatchList() {
  const navigate = useNavigate();
  let isLoggedIn = true;

  // Handle link clicks and log the route
  const handleLinkClick = route => {
    console.log('Navigating to:', route);
    navigate(route);
  };

  return (
    <>
      <Header isloggedIn={isLoggedIn} />
      <div className="dash-cont">
        <DashboardSection onLinkClick={handleLinkClick} />
      </div>
      <Carousel />
    </>
  );
}

export default MatchList;
// import React from 'react';
// import Carousel from './Carousel/Carousel';
// import Header from '../Header/Header';
// import DashboardSection from '../Dashboard/DashboardSection';
// import './MatchList.css';
// import { useNavigate } from 'react-router-dom';

// function MatchList() {
//   const navigate = useNavigate();
//   return (
//     <>
//       <Header />
//       <div className="dash-cont">
//         <DashboardSection />
//       </div>
//       <Carousel />
//     </>
//   );
// }

// export default MatchList;
