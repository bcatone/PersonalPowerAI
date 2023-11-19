// import axios from 'axios';
import { getChangeResponse } from "./helpers"

export const BASE_URL_RAILS = "";
export const BASE_URL_FLASK = "/api/flask";

// Replaces getContent(token)
export const getLoggedInUserInfo = async (token) => {
  return fetch(`${BASE_URL_RAILS}/me`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => getChangeResponse(res));
}

// Replaces register(name, email, password)
// Information is sent to Rails dynamically instead of by each field
// This will make expansion easier to manage on both sides
export const registerNewUser = async (newUserData) => {
  return fetch(`${BASE_URL_RAILS}/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserData),
  }).then((res) => getChangeResponse(res));
}

// Replaces authorize(email, password)
// Information is sent to Rails dynamically instead of by each field
// This will make expansion easier to manage on both sides
export const loginUser = async (loginData) => {
  return fetch(`${BASE_URL_RAILS}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  }).then((res) => getChangeResponse(res));
}

export const logoutUser = async () => {
  return fetch(`${BASE_URL_RAILS}/logout`, {
    method: "DELETE",
  }).then((res) => getChangeResponse(res));
}

export const deleteUserAccount = async (deletedUserData) => {
  return fetch(`${BASE_URL_RAILS}/cancel`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(deletedUserData),
  }).then((res) => getChangeResponse(res));
}

export const getGameCardsData = async () => {
  return fetch(`${BASE_URL_RAILS}/categories`)
  .then((res) => getChangeResponse(res));
}

// export const register = (name, email, password) => {
//   return fetch(`${BASE_URL_RAILS}/signup`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name, email, password }),
//   }).then((res) => getChangeResponse(res))
// }

// export const authorize = (email, password) => {
//   return fetch(`${BASE_URL_RAILS}/login`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   }).then((res) => getChangeResponse(res))
// }

// export const getContent = async (token) => {
//   return fetch(`${BASE_URL_RAILS}/me`, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   }).then((res) => getChangeResponse(res))
// }

// Gets the profile data for the logged-in user
export const getMe = () => {
  return fetch(`${BASE_URL_RAILS}/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
  }).then((res) => getChangeResponse(res))
}

// метод изменяет данные профиля
export const setUserInfo = (data) => {
  return fetch(`${BASE_URL_RAILS}/users/me`, {
    method: "PATCH", //метод запроса
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    }),
  }).then((res) => getChangeResponse(res))
}
