import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate, useLocation, Navigate } from 'react-router-dom';
import * as api from '../../utils/MainApi';
import { setIsLoading } from '../../redux/actions/isLoadingActions';
import { setUser, clearUser } from '../../redux/actions/authActions';
// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Dashboard from '../Dashboard/Dashboard';
//import Chat from '../Chat/Chat';
import Game from '../Game/Game';
import Match from '../Game/Match/Match';
import NoMatch from '../Game/NoMatch/NoMatch';
// import InfoTooltip from '../InfoTooltip/InfoTooltip';
// import InfoTooltipEditProfile from '../InfoTooltipEditProfile/InfoTooltipEditProfile';
import NotFound from '../NotFound/NotFound';
import MatchList from '../MatchList/MatchList';
import MentorBot from '../MentorBot/MentorBot';
import './App.css';
import Layout from '../layouts/Layout';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MontyTheMentorBot from '../MentorBot/MontyTheMentorBot';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  // const [isLoading, setIsLoading] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isUpdate, setIsUpdate] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);
  // const [isInfoToolTipPopupOpen, setInfoToolTipPopupOpen] = useState(false);
  // const [isInfoTooltipEditProfilePopupOpen, setInfoTooltipEditProfilePopupOpen] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const isLoggedIn = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    const testUser = {
      id: 1,
      first_name: 'Dana',
      categories: [],
      skills: [],
      interests: []
      // enter anything else you want to use for testing out frontend stuff
    };

    dispatch(setUser(testUser));
  }, []);

  // useEffect(() => {
  //   dispatch(setIsLoading(true));
  //   try {
  //     const jwt = localStorage.getItem('jwt');

  //     if (jwt) {
  //       api
  //         .getLoggedInUserInfo(jwt)
  //         .then(res => {
  //           if (res) {
  //             dispatch(setUser(res));
  //           }
  //           navigate(path);
  //         })
  //         .catch(error => {
  //           console.error(error);
  //           console.log("The jwt token was not found on the backend."); // Debug log
  //           dispatch(clearUser());
  //         });
  //     } else {
  //       console.log("No JSON web token found in local storage."); // Debug log
  //       dispatch(clearUser());
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     dispatch(setIsLoading(false));
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  // useEffect(() => {
  //   const handleLogout = () => {
  //     // setIsLoggedIn(false);
  //     localStorage.removeItem('jwt');
  //     localStorage.clear();
  //     dispatch(clearUser());
  //     navigate('/');
  //   };

  //   if (!user) {
  //     console.log("Logging out...")
  //     handleLogout();
  //   }
  // }, [user])

  // // This was replaced with the above useEffect
  // useEffect(() => {
  //   const jwt = localStorage.getItem('jwt');
  //   if (jwt) {
  //     api
  //       .getContent(jwt)
  //       .then(res => {
  //         if (res) {
  //           setIsLoggedIn(true);
  //           // localStorage.removeItem('allMovies');
  //         }
  //         navigate(path);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }
  // }, []);

  // // Registration (logic is moved to Registration directory)
  // function registrationUser({ name, email, password, expertise, timezone }) {
  //   setIsLoading(true);
  //   api
  //     .register(name, email, password, expertise, timezone)
  //     .then(() => {
  //       loginUser({ email, password });
  //       setInfoToolTipPopupOpen(true);
  //       setIsSuccess(true);
  //     })
  //     .catch(error => {
  //       setInfoToolTipPopupOpen(true);
  //       setIsSuccess(false);
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }

  // // Login (logic is moved to Login directory)
  // function loginUser({ email, password }) {
  //   setIsLoading(true);
  //   api
  //     .authorize(email, password)
  //     .then(res => {
  //       if (res) {
  //         setIsSuccess(true);
  //         setInfoToolTipPopupOpen(true);
  //         localStorage.setItem('jwt', res.token);
  //         navigate('/dashboard', { replace: true });
  //         setIsLoggedIn(true);
  //       }
  //     })
  //     .catch(error => {
  //       setInfoToolTipPopupOpen(true);
  //       setIsSuccess(false);
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }

  // // Edit Profile (logic is moved to Profile directory)
  // function editProfileInfo(userInfo) {
  //   setIsLoading(true);
  //   api
  //     .setUserInfo(userInfo)
  //     .then(data => {
  //       setInfoTooltipEditProfilePopupOpen(true);
  //       setIsUpdate(true);
  //       setCurrentUser(data);
  //     })
  //     .catch(error => {
  //       setInfoTooltipEditProfilePopupOpen(true);
  //       setIsUpdate(false);
  //       console.log(error);
  //       handleAuthorizationError(error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }

  // // handle auth error (this is already accounted for in the initial useEffect)
  // function handleAuthorizationError(error) {
  //   if (error === 'Error: 401') {
  //     handleLogout();
  //   }
  // }

  // //  close All Popups
  // function closeAllPopups() {
  //   setInfoToolTipPopupOpen(false);
  //   setInfoTooltipEditProfilePopupOpen(false);
  // }

  // // Close on ESC
  // useEffect(() => {

  //   // Moved this inside the useEffect and changed dependencies to rely on state
  //   const isOpen = isInfoToolTipPopupOpen || isInfoTooltipEditProfilePopupOpen;

  //   function closeByEscapePopups(evt) {
  //     if (evt.key === 'Escape') {
  //       closeAllPopups();
  //     }
  //   }
  //   if (isOpen) {
  //     document.addEventListener('keydown', closeByEscapePopups);
  //     return () => {
  //       document.removeEventListener('keydown', closeByEscapePopups);
  //     };
  //   }
  // }, [isInfoToolTipPopupOpen, isInfoTooltipEditProfilePopupOpen]);

  // // Popup close on overlay
  // function closeByOverlayPopups(event) {
  //   if (event.target === event.currentTarget) {
  //     closeAllPopups();
  //   }
  // }

  // // When you logout all the data is cleaned
  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  //   localStorage.removeItem('jwt');
  //   localStorage.clear();
  //   dispatch(clearUser());
  //   navigate('/');
  // };

  return (
    <div className="page">
      <div className="page__wrapper page__container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={isLoggedIn ? <Navigate to="/me" replace /> : <Main />} />
            <Route
              path="signin/"
              element={isLoggedIn ? <Navigate to="/me" replace /> : <Login />}
            />
            <Route
              path="register/"
              element={isLoggedIn ? <Navigate to="/me" replace /> : <Register />}
            />
            <Route path="me/">
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard/" element={<ProtectedRoute component={Dashboard} />} />
              <Route path="profile/" element={<ProtectedRoute component={Profile} />} />
              <Route path="game/" element={<ProtectedRoute component={Game} />} />
              <Route path="match/" element={<ProtectedRoute component={Match} />} />
              <Route path="no-match/" element={<ProtectedRoute component={NoMatch} />} />
              <Route path="ai-mentor-bot/" element={<ProtectedRoute component={NoMatch} />} />
              <Route path="match-list/" element={<ProtectedRoute component={MatchList} />} />
              <Route path="mentorbot/" element={<ProtectedRoute component={MontyTheMentorBot} />} />
            </Route>
          </Route>
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );

  return (
    // <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <div className="page__wrapper page__container">
        <Routes>
          <Route
            path={'/'}
            element={
              <>
                <Header loggedIn={isLoggedIn} />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path={'/signin'}
            element={
              isLoggedIn ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Login
                // isLoading={isLoading}
                // onAuthorization={loginUser}
                />
              )
            }
          />
          <Route
            path={'/register'}
            element={
              isLoggedIn ? (
                <Navigate to="/game" replace />
              ) : (
                <Register
                // isLoading={isLoading}
                // registrationUser={registrationUser}
                />
              )
            }
          />
          {/* not protected */}
          {/* <Route
              path={'/dashboard'}
              element={
                !isLoggedIn ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <Login isLoading={isLoading} onAuthorization={loginUser} />
                )
              }
            /> */}
          <Route
            path={'/dashboard'}
            element={!isLoggedIn ? <Dashboard /> : <Navigate to="/signin" replace />}
          />
          <Route
            path={'/profile'}
            element={
              <>
                <Profile />
              </>
            }
          />
          <Route
            path={'/game'}
            element={
              <>
                <Game />
              </>
            }
          />
          <Route
            path={'/match'}
            element={
              <>
                <Match />
              </>
            }
          />
          <Route
            path={'/no-match'}
            element={
              <>
                <NoMatch />
              </>
            }
          />
          <Route
            path={'/ai-mentor-bot'}
            element={
              <>
                <NoMatch />
              </>
            }
          />
          <Route
            path={'/match-list'}
            element={
              <>
                <MatchList />
              </>
            }
          />
          <Route
            path={'/mentorbot'}
            element={
              <>
                <MentorBot />
              </>
            }
          />

          {/* <Route
              path={'/chat'}
              element={
                <>
                  <Chat />
                </>
              }
            /> */}
          {/* <Route
              path={'/dashboard'}
              element={
                <ProtectedRoute
                  path="/dashboard"
                  loggedIn={isLoggedIn}
                  component={Dashboard}
                  // handleLikeFilm={handleLikeFilm}
                  // onDeleteCard={handleDeleteFilm}
                  // savedMovies={savedMovies}
                />
              }
            />
            <Route
              path={'/game'}
              element={
                <ProtectedRoute
                  path="/game"
                  loggedIn={isLoggedIn}
                  component={Game}
                  // dashboard={dashboard}
                />
              }
            />
            <Route
              path={'/profile'}
              element={
                <ProtectedRoute
                  path="/profile"
                  loggedIn={isLoggedIn}
                  component={Profile}
                  isLoading={isLoading}
                  onUpdateUser={editProfileInfo}
                  signOut={handleLogout}
                />
              }
            />
            <Route
              path={'/chat'}
              element={
                <ProtectedRoute
                  path="/chat"
                  loggedIn={isLoggedIn}
                  component={Chat}
                  // dashboard={dashboard}
                />
              }
            /> */}
          <Route path={'*'} element={<NotFound />} />
        </Routes>
        {/* <InfoTooltip
            isSuccess={isSuccess}
            isOpen={isInfoToolTipPopupOpen}
            onClose={closeAllPopups}
            onCloseOverlay={closeByOverlayPopups}
          /> */}
        {/* <InfoTooltipEditProfile
            isUpdate={isUpdate}
            isOpen={isInfoTooltipEditProfilePopupOpen}
            onClose={closeAllPopups}
            onCloseOverlay={closeByOverlayPopups}
          /> */}
      </div>
    </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
