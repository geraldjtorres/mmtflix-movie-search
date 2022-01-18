import { useState, useEffect } from 'react'
import Image from 'next/image'
import moment from 'moment'
import Modal from '@/components/Modal'
import { StyledRow, MoviesContainer } from './styles/Row.styled'
import { MovieCard } from './styles/MovieCard.styled'
import { fetchMovieImageUrl, fetchMovieDetails } from '@/helpers/index'
import { FiImage } from 'react-icons/fi'

export default function Row({ movies, title, allItems }) {
  const [showModal, setShowModal] = useState(false)
  const [currentMovie, setCurrentMovie] = useState(null)
  const [castList, setCastList] = useState(null)
  const [genres, setGenres] = useState(null)
  const [director, setDirector] = useState('')

  useEffect(() => {
    // Prevent body from scorlling when modal is activated
    if (showModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }, [showModal])

  const checkDirectorExists = movieDetails => {
    let director = null
    // Check if moviteDetails has items in the .crew array an then check for a director
    if (movieDetails.credits.crew.length > 1) {
      director = movieDetails.credits.crew.find(crew =>
        crew.job === 'Director' ? crew.job : null
      )
    }
    if (director) setDirector(director.name)
  }

  const onClickCard = async movie => {
    // Get movie details
    const restMovieDetails = await fetch(fetchMovieDetails(movie.id))
    const movieDetails = await restMovieDetails.json()
    setGenres(movieDetails.genres)
    setCastList(movieDetails.credits.cast.slice(0, 3))
    checkDirectorExists(movieDetails)
    setCurrentMovie(movie)
    setShowModal(true)
  }

  const Card = movie => (
    <MovieCard key={movie.id} onClick={() => onClickCard(movie)}>
      <div>
        {movie.poster_path ? (
          <Image
            src={fetchMovieImageUrl(movie.poster_path)}
            layout='fill'
            objectFit='cover'
            alt={movie.title}
            placeholder='blur'
            quality='75'
            blurDataURL={`/_next/image?url=${fetchMovieImageUrl(
              movie.poster_path
            )}&w=16&q=1`}
          />
        ) : (
          <FiImage />
        )}
      </div>
      <p>{movie.title}</p>
      <p>{movie.release_date && moment(movie.release_date).format('YYYY')}</p>
    </MovieCard>
  )
  return (
    <StyledRow>
      <h2>{title}</h2>
      <MoviesContainer>
        {allItems
          ? movies.results?.map(movie => Card(movie))
          : movies.results?.slice(0, 5).map(movie => Card(movie))}
      </MoviesContainer>

      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        movie={currentMovie}
        genres={genres}
        castList={castList}
        director={director}
      />
    </StyledRow>
  )
}
