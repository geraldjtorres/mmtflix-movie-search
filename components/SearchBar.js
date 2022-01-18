import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { StyledSearch, Spinner } from './styles/Search.styled'
import { FaSearch } from 'react-icons/fa'
import debounce from 'lodash.debounce'

export default function SearchBar() {
  const [term, setTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleChange = value => {
    setTerm(value)
  }

  const delayedQuery = useCallback(
    debounce(() => {
      router.push(`/movies/search?term=${term}`)
      setIsLoading(false)
    }, 500),
    [term]
  )

  useEffect(() => {
    if (term !== '') {
      setIsLoading(true)
      delayedQuery()
      return delayedQuery.cancel
    }
  }, [term, delayedQuery])

  return (
    <StyledSearch>
      <input
        type='text'
        value={term}
        onChange={e => handleChange(e.target.value)}
        placeholder='Search here...'
      />
      {isLoading ? <Spinner /> : <FaSearch />}
    </StyledSearch>
  )
}
