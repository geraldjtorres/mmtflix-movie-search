import Layout from '@/components/Layout'
import Row from '@/components/Row'
import {
  StyledSearchPage,
  HeaderPagination
} from '@/components/styles/SearchPage.styles'
import { API_URL } from '@/config/index'
import Pagination from '@/components/Pagination'

export default function Search({ searchResultMovies, page, term }) {
  return (
    <Layout>
      <StyledSearchPage>
        <HeaderPagination>
          <h2>
            {searchResultMovies.total_results} search results for &apos;{term}
            &apos;
          </h2>
          <Pagination
            currentPage={page}
            lastPage={searchResultMovies.total_pages}
            term={term}
          />
        </HeaderPagination>

        <Row movies={searchResultMovies} allItems />
      </StyledSearchPage>
    </Layout>
  )
}

export async function getServerSideProps({ query: { term, page = 1 } }) {
  const searchRest = await fetch(
    `${API_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}&query=${term}&page=${page}`
  )
  const searchResultMovies = await searchRest.json()

  return {
    props: { searchResultMovies, page: +page, term }
  }
}
