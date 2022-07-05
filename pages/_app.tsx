import '../styles/global-style.ts';
import Head from 'next/head';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { basicTheme, darkTheme, lightTheme } from '../enum/ThemeEnums';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { isDarkAtom } from '../recoil/theme';
import { AppProps } from 'next/app';
import ThemeButton from '../components/themeButton';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <RecoilRoot>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Next-basics | Next</title>
        </Head>
        <GlobalStyle/>
        <ThemeProvider theme={basicTheme}>
          <ThemeButton/>
          <Component {...pageProps}/>
        </ThemeProvider>
      </RecoilRoot>
    </div>
  )
}

export default MyApp
