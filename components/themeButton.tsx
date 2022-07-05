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
          width={'24px'}
          height={'24px'}
          color={"red"}
          onClick={toggleDarkAtom}
        />
      </Tdiv>
  )
}

const Tdiv = styled.div`
  width: 300px;
  height: 300px;
  background-color: green;
  position: fixed;
  right: 0;
  bottom: 0;
`