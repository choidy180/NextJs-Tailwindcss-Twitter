import '../styles/global-style.ts';
import Head from 'next/head';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { basicTheme } from '../enum/ThemeEnums';
import '../styles/globals.css'
import { useEffect, useState } from 'react';
import { authService } from '../firebase/firebase';
import { RecoilRoot, useRecoilState } from 'recoil';
import { LoginState } from '../recoil/LoginState';

export default function MyApp({ Component, pageProps: { session, ...pageProps }}) {
  const [userObj, setUserObj] = useState(null);
  // Component mount timing
  useEffect(()=> {
    authService.onAuthStateChanged((user) => {
      if(user){
        setUserObj(user);
        return;
      } else {
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
          <RecoilRoot>
            <Component {...pageProps}
              userObj={userObj}
            />  
          </RecoilRoot>
        </ThemeProvider>
      {/* </SessionProvider> */}
    </div>
  )
}
