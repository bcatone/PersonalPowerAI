import { getChangeResponse } from "./helpers"

// export const BASE_URL = "http://localhost:3000"

export const BASE_URL = 'https://api.danamovies.nomoredomainsicu.ru';

export const getMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
  }).then((res) => getChangeResponse(res))
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then((res) => getChangeResponse(res))
}

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => getChangeResponse(res))
}

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => getChangeResponse(res))
}

// метод делает запрос серверу и получает данные профиля
export const getMe = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
  }).then((res) => getChangeResponse(res))
}

// метод изменяет данные профиля
export const setUserInfo = (data) => {
  return fetch(`${BASE_URL}/users/me`, {
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

// метод добавления новой карточки
export const addNewCard = (data) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: "https://api.nomoreparties.co" + data.image.url,
      trailerLink: data.trailerLink,
      thumbnail:
        "https://api.nomoreparties.co" + data.image.formats.thumbnail.url,
      movieId: data.id,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
    }),
  }).then((res) => getChangeResponse(res))
}

// метод удаления карточки
export const deleteCard = (cardId) => {
  return fetch(`${BASE_URL}/movies/${cardId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
  }).then((res) => getChangeResponse(res))
}
