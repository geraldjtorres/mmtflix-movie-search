const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original/'

export function fetchMovieImageUrl(imgPath) {
  return `${IMG_BASE_URL}${imgPath}`
}

export function fetchMovieDetails(movieId) {
  return `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}&language=en-US&append_to_response=credits`
}
