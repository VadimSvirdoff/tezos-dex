import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, theme } from "@chakra-ui/react";
import { DAppProvider } from "hooks/useDApp";

function MyApp({ Component, pageProps }: AppProps) {
  return (<DAppProvider appName="Another app name">
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  </DAppProvider >)
}
export default MyApp
