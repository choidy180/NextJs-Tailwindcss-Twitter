import '../styles/global-style.ts';
import Head from 'next/head';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { basicTheme, darkTheme, lightTheme } from '../enum/ThemeEnums';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { AppProps } from 'next/app';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css'
import { isDarkAtom } from '../recoil/theme';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next-basics | Next</title>
      </Head>
      <GlobalStyle/>
      <ThemeProvider theme={basicTheme}>
        <Sidebar/>
        <Component {...pageProps}/>
      </ThemeProvider>
    </div>
  )
}

export default MyApp
