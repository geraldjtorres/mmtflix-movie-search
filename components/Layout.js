import Head from 'next/head'
import Header from './Header'
import { Container, InnerContainer } from './styles/Container.styled'

export default function Layout({ title, description, keywords, children }) {
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Header />

      <InnerContainer>{children}</InnerContainer>
    </Container>
  )
}

Layout.defaultProps = {
  title: 'MMTflix Movies',
  description: 'Find your favourite movie or discover something new',
  keywords: 'movie, film, cinema'
}
