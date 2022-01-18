const requests = {
  fetchTrending: `${process.env.TMDB_API_URL}/trending/all/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}&language=en-US`,
  fetchTopRated: `${process.env.TMDB_API_URL}/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}&language=en-US`,
  fetchActionMovies: `${process.env.TMDB_API_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}&with_genres=28`,
  fetchComedyMovies: `${process.env.TMDB_API_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}&with_genres=35`,
  fetchHorrorMovies: `${process.env.TMDB_API_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}&with_genres=27`,
  fetchRomanceMovies: `${process.env.TMDB_API_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}&with_genres=10749`
}

export default requests
