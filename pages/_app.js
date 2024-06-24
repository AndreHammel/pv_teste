import '../styles/globals.css'
import "@fontsource/orbitron"
import "@fontsource/orbitron/400.css"
import "@fontsource/orbitron/800.css"
import "@fontsource/orbitron/900.css"
import "@fontsource/exo/300.css";
import "@fontsource/exo/400.css";
import "@fontsource/exo/700.css";
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme/theme'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID
    const options = {
      autoConfig: true,
      debug: false,
    }
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(pixelId, options)
        ReactPixel.pageView()
        ReactPixel.track('ViewContent')
      })
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
