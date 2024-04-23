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

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
