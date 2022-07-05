import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { darkTheme, lightTheme } from "../enum/ThemeEnums";
import { isDarkAtom } from "../recoil/theme";
import styled from "styled-components";
import { ContrastOutline } from "react-ionicons";

export default function ThemeButton(){
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const isDark = useRecoilValue(isDarkAtom);
  const [theme, useTheme] = useState(isDark ? darkTheme : lightTheme);
  const toggleDarkAtom = () => {
    setDarkAtom((e) => !e);
  };
  return (
      <Tdiv>
        <ContrastOutline
          width={'30px'}
          height={'30px'}
          color={theme.textColor}
          onClick={toggleDarkAtom}
        />
      </Tdiv>
  )
}

const Tdiv = styled.div`
  width: auto;
  height: auto;
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 6.5px;
  svg{
    cursor: pointer;
  }
`