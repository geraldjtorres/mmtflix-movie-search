import '../styles/reset.css'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@/components/styles/Global'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#000',
    footer: '#003333',
    container: '#262626',
    innerContainer: '#474747'
  },

  mobile: '576px',
  tablet: '768px'
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
