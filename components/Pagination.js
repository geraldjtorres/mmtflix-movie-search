import { StyledPagination } from './styles/Pagination.styled'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import { useRouter } from 'next/router'

export default function Pagination({ currentPage, lastPage, term }) {
  const router = useRouter()

  const goToPage = type => {
    const URL = `/movies/search?term=${term}&page=`

    if (type === 'prev') {
      router.push(`${URL}${currentPage - 1}`)
    } else if (type === 'next') {
      router.push(`${URL}${currentPage + 1}`)
    }
  }

  return (
    <StyledPagination>
      <p>
        Page {currentPage} of {lastPage}
      </p>

      <div>
        {currentPage > 1 ? (
          <button onClick={() => goToPage('prev')}>
            <FaCaretLeft />
          </button>
        ) : (
          <button className='disabled'>
            <FaCaretLeft />
          </button>
        )}

        {currentPage < lastPage ? (
          <button onClick={() => goToPage('next')}>
            <FaCaretRight />
          </button>
        ) : (
          <button className='disabled'>
            <FaCaretRight />
          </button>
        )}
      </div>
    </StyledPagination>
  )
}
