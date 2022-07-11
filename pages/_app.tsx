import '../styles/global-style.ts';
import Head from 'next/head';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { basicTheme } from '../enum/ThemeEnums';
import { AppProps } from 'next/app';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { authService } from '../firebase/firebase';

export default function MyApp({ Component, pageProps: { session, ...pageProps }}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  // Component mount timing
  useEffect(()=> {
    authService.onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(true);
        setUserObj(user);
        return;
      } else {
        setIsLoggedIn(false);
        setUserObj(null);
        return;
      }
    })
  })

  return (
    <div>
      {/* <SessionProvider session={session}> */}
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Next-basics | Next</title>
        </Head>
        <GlobalStyle/>
        <ThemeProvider theme={basicTheme}>
          <Component {...pageProps}
            isLoggedIn={isLoggedIn}
            userObj={userObj}
          />
        </ThemeProvider>
      {/* </SessionProvider> */}
    </div>
  )
}
