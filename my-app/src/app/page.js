"use client";
import React, { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import styled from "styled-components";
import { lightMode, darkMode } from "../../constants/palette";
import Pillbutton from "../../components/Pillbutton";

const Root = styled.div`
  color: ${({ theme }) =>
    theme === "lightMode" ? lightMode.Text : darkMode.Text};
  background-color: ${({ theme }) =>
    theme === "lightMode" ? lightMode.Background : darkMode.Background};
  height: 100vh;
`;

export default function page() {
  const { theme } = useContext(ThemeContext);

  return (
    <Root theme={theme}>
      <Pillbutton />
    </Root>
  );
}
