import Layout from '@/components/Layout'
import Row from '@/components/Row'
import requests from 'Requests'

export default function Home({
  trendingMovies,
  topRatedMovies,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies
}) {
  return (
    <>
      <Layout>
        <>
          <Row movies={trendingMovies} title='Trending Now' />
          <Row movies={topRatedMovies} title='Top Rated' />
          <Row movies={actionMovies} title='Action Movies' />
          <Row movies={comedyMovies} title='Comedy Movies' />
          <Row movies={horrorMovies} title='Horror Movies' />
          <Row movies={romanceMovies} title='Romance Movies' />
        </>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const restTrending = await fetch(requests.fetchTrending)
  const trendingMovies = await restTrending.json()

  const restTopRated = await fetch(requests.fetchTopRated)
  const topRatedMovies = await restTopRated.json()

  const restActionMovies = await fetch(requests.fetchActionMovies)
  const actionMovies = await restActionMovies.json()

  const restComedyMovies = await fetch(requests.fetchComedyMovies)
  const comedyMovies = await restComedyMovies.json()

  const restHorrorMovies = await fetch(requests.fetchHorrorMovies)
  const horrorMovies = await restHorrorMovies.json()

  const restRomanceMovies = await fetch(requests.fetchRomanceMovies)
  const romanceMovies = await restRomanceMovies.json()

  return {
    props: {
      trendingMovies,
      topRatedMovies,
      actionMovies,
      comedyMovies,
      horrorMovies,
      romanceMovies
    },
    revalidate: 1
  }
}
