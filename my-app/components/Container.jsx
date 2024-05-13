"use client";
import React, { useContext } from "react";
import ThemeContext from "../src/app/context/ThemeContext";
import styled from "styled-components";
import { lightMode, darkMode } from "../constants/palette";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) =>
    theme === "lightMode" ? lightMode.Background : darkMode.Background};
`;

const Root = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  color: ${({ theme }) =>
    theme === "lightMode" ? lightMode.Text : darkMode.Text};
  background-color: ${({ theme }) =>
    theme === "lightMode" ? lightMode.Background : darkMode.Background};
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function Container({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <Background theme={theme}>
      <Root theme={theme}>
        <FlexWrapper>{children}</FlexWrapper>
      </Root>
    </Background>
  );
    

}
