import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import {
  StyledModalBody,
  StyledModalHeader,
  StyledModal,
  StyledModalOverlay,
  StyledModalImage,
  StyledModalText
} from './styles/Modal.styled'
import { FaTimes } from 'react-icons/fa'
import { fetchMovieImageUrl } from '@/helpers/index'
import Image from 'next/image'
import moment from 'moment'
import { FiImage } from 'react-icons/fi'

export default function Modal({
  show,
  onClose,
  movie,
  genres,
  castList,
  director
}) {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const handleCloseClick = e => {
    e.preventDefault()
    onClose()
  }

  const concatItems = collection => {
    // Loop over array items and return as string with a comma concatonated
    // If item is last one in the loop, dont add comma
    let concatString = ''
    for (let [index, item] of collection.entries()) {
      if (index === collection.length - 1) {
        concatString += `${item.name}`
      } else {
        concatString += `${item.name}, `
      }
    }
    return concatString
  }

  const modalContent = show ? (
    <StyledModalOverlay onClick={handleCloseClick}>
      <StyledModal>
        <StyledModalHeader>
          <a href='#' onClick={handleCloseClick}>
            <FaTimes />
          </a>
        </StyledModalHeader>

        <StyledModalBody>
          <StyledModalImage>
            {movie.poster_path ? (
              <Image
                src={fetchMovieImageUrl(movie.poster_path)}
                layout='fill'
                objectFit='cover'
                placeholder='blur'
                quality='75'
                blurDataURL={`/_next/image?url=${fetchMovieImageUrl(
                  movie.poster_path
                )}&w=16&q=1`}
                alt={movie.title}
              />
            ) : (
              <FiImage />
            )}
          </StyledModalImage>

          <StyledModalText>
            <h2>
              {movie.title}{' '}
              {movie.release_date && (
                <span>({moment(movie.release_date).format('YYYY')})</span>
              )}
            </h2>

            <div>
              {director && <p>Director: {director}</p>}
              {castList.length !== 0 && <p>Cast: {concatItems(castList)}</p>}
              {genres.length !== 0 && <p>Genre: {concatItems(genres)} </p>}
            </div>

            <p className='description'>{movie.overview}</p>
          </StyledModalText>
        </StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    )
  } else {
    return null
  }
}
