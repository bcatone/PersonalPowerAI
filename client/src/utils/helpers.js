import { MAXIMAL_DURATION_MOVIE } from "./constants"

// Функция для проверки ответа от сервера
export const getChangeResponse = (res) => {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Error: ${res.status}`)
}

// Длительность фильмов
export function filterDurationMovie(movies) {
  return movies.filter((movie) => movie.duration < MAXIMAL_DURATION_MOVIE)
}

// Короткометражки
export function filterMovies(movies, query) {
  const moviesQuery = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase().trim()
    const movieEn = String(movie.nameEN).toLowerCase().trim()
    const userQuery = query.toLowerCase().trim()
    return (
      movieRu.indexOf(userQuery) !== -1 || movieEn.indexOf(userQuery) !== -1
    )
  })
  return moviesQuery
}

// Функция formatDurationMovie принимает значение длительности duration
// в минутах и конвертирует его в формат часы:минуты
export function formatDurationMovie(duration) {
  const hours = Math.floor(duration / 60)
  const minutes = duration % 60
  return `${hours}ч${minutes}м`
}
