import '../styles/global-style.ts';
import Head from 'next/head';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { basicTheme } from '../enum/ThemeEnums';
import { AppProps } from 'next/app';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react';

export default function MyApp({ 
  Component, 
  pageProps: { session, ...pageProps },
}) {
  return (
    <div>
      <SessionProvider session={session}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Next-basics | Next</title>
        </Head>
        <GlobalStyle/>
        <ThemeProvider theme={basicTheme}>
          <Component {...pageProps}/>
        </ThemeProvider>
      </SessionProvider>
    </div>
  )
}
