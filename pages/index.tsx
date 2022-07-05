import type { NextPage } from "next";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../recoil/theme";
import styled from "styled-components";
import { darkTheme, lightTheme } from "../enum/ThemeEnums";


const Home: NextPage = (props) => {
  return (
    <Container>Next-basic</Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  color: ${isDarkAtom ? darkTheme.textColor : lightTheme.textColor};
  background-color: ${isDarkAtom ? darkTheme.bgColor : lightTheme.bgColor};
`

export default Home;
