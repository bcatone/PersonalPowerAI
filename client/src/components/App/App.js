import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { Route, Routes, useNavigate, useLocation, Navigate } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Footer from '../Footer/Footer';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Register from '../Register/Register';
import Login from '../Login/Login';
import * as api from '../../utils/MainApi';
import Profile from '../Profile/Profile';
import Dashboard from '../Dashboard/Dashboard';
//import Chat from '../Chat/Chat';
import Game from '../Game/Game';
import Match from '../Game/Match/Match';
import NoMatch from '../Game/NoMatch/NoMatch';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import InfoTooltipEditProfile from '../InfoTooltipEditProfile/InfoTooltipEditProfile';
import NotFound from '../NotFound/NotFound';
import './App.css';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isInfoToolTipPopupOpen, setInfoToolTipPopupOpen] = useState(false);
  const [isInfoTooltipEditProfilePopupOpen, setInfoTooltipEditProfilePopupOpen] = useState(false);

  // show data on auth
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     api
  //       .getMe()
  //       .then(profileInfo => {
  //         setCurrentUser(profileInfo);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //     api
  //       .getMovies()
  //       .then(cardsSavedFilms => {
  //         setSavedMovies(cardsSavedFilms.reverse());
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }
  // }, [isLoggedIn]);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      api
        .getContent(jwt)
        .then(res => {
          if (res) {
            setIsLoggedIn(true);
            // localStorage.removeItem('allMovies');
          }
          navigate(path);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);

  // Registration
  function registrationUser({ name, email, password, expertise, timezone }) {
    setIsLoading(true);
    api
      .register(name, email, password, expertise, timezone)
      .then(() => {
        loginUser({ email, password });
        setInfoToolTipPopupOpen(true);
        setIsSuccess(true);
      })
      .catch(error => {
        setInfoToolTipPopupOpen(true);
        setIsSuccess(false);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // Login
  function loginUser({ email, password }) {
    setIsLoading(true);
    api
      .authorize(email, password)
      .then(res => {
        if (res) {
          setIsSuccess(true);
          setInfoToolTipPopupOpen(true);
          localStorage.setItem('jwt', res.token);
          navigate('/dashboard', { replace: true });
          setIsLoggedIn(true);
        }
      })
      .catch(error => {
        setInfoToolTipPopupOpen(true);
        setIsSuccess(false);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // Add like to the game card
  // function handleCardLike(card) {
  //   api
  //     .addNewCard(card)
  //     .then(newMovieFilm => {
  //       setSavedMovies([newMovieFilm, ...savedMovies]);
  //     })
  //     .catch(error => {
  //       setIsSuccess(false);
  //       console.log(error);
  //       handleAuthorizationError(error);
  //     });
  // }

  // // Удаление сохраненного фильма
  // function handleDeleteFilm(card) {
  //   api
  //     .deleteCard(card._id)
  //     .then(() => {
  //       setSavedMovies(state => state.filter(item => item._id !== card._id));
  //     })
  //     .catch(error => {
  //       setIsSuccess(false);
  //       console.log(error);
  //       handleAuthorizationError(error);
  //     });
  // }

  // Edit Profile
  function editProfileInfo(userInfo) {
    setIsLoading(true);
    api
      .setUserInfo(userInfo)
      .then(data => {
        setInfoTooltipEditProfilePopupOpen(true);
        setIsUpdate(true);
        setCurrentUser(data);
      })
      .catch(error => {
        setInfoTooltipEditProfilePopupOpen(true);
        setIsUpdate(false);
        console.log(error);
        handleAuthorizationError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // handle auth error
  function handleAuthorizationError(error) {
    if (error === 'Error: 401') {
      handleLogout();
    }
  }

  //  close All Popups
  function closeAllPopups() {
    setInfoToolTipPopupOpen(false);
    setInfoTooltipEditProfilePopupOpen(false);
  }

  // to see the state in useEffect I use the isOpen const
  const isOpen = isInfoToolTipPopupOpen || isInfoTooltipEditProfilePopupOpen;

  // Close on ESC
  useEffect(() => {
    function closeByEscapePopups(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', closeByEscapePopups);
      return () => {
        document.removeEventListener('keydown', closeByEscapePopups);
      };
    }
  }, [isOpen]);

  // Popup clole on overlay
  function closeByOverlayPopups(event) {
    if (event.target === event.currentTarget) {
      closeAllPopups();
    }
  }

  // When you logout all the data is cleaned
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    localStorage.removeItem('movieSearch');
    localStorage.removeItem('shortMovies');
    localStorage.removeItem('allMovies');
    localStorage.clear();
    navigate('/');
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
                  <Login isLoading={isLoading} onAuthorization={loginUser} />
                )
              }
            />
            <Route
              path={'/register'}
              element={
                isLoggedIn ? (
                  <Navigate to="/game" replace />
                ) : (
                  <Register isLoading={isLoading} registrationUser={registrationUser} />
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
            <Route path={'*'} element={<NotFound />} />
          </Routes>
          <InfoTooltip
            isSuccess={isSuccess}
            isOpen={isInfoToolTipPopupOpen}
            onClose={closeAllPopups}
            onCloseOverlay={closeByOverlayPopups}
          />
          <InfoTooltipEditProfile
            isUpdate={isUpdate}
            isOpen={isInfoTooltipEditProfilePopupOpen}
            onClose={closeAllPopups}
            onCloseOverlay={closeByOverlayPopups}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
