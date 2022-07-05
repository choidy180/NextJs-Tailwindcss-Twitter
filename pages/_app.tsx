import '../styles/global-style.ts';
import Head from 'next/head';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { basicTheme } from '../enum/ThemeEnums';
import { AppProps } from 'next/app';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next-basics | Next</title>
      </Head>
      <GlobalStyle/>
      <ThemeProvider theme={basicTheme}>
        <Component {...pageProps}/>
      </ThemeProvider>
    </div>
  )
}

export default MyApp
