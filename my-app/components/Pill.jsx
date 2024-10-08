import React, { useContext } from "react";
import ThemeContext from "@/app/context/ThemeContext";
import styled from "styled-components";
import { lightMode, darkMode } from "../constants/palette";

const PillContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  margin: 0 8px 16px 8px;
  border-radius: 999px; /* Large value to make it pill-shaped */
  background-color: ${({ theme }) =>
    theme === "lightMode" ? lightMode.Pill : darkMode.Pill};
  color: ${({ theme }) =>
    theme === "lightMode" ? darkMode.Pill : lightMode.Pill};
`;

const PillText = styled.div`
  text-align: center;
`;

export default function Pill({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <PillContainer theme={theme}>
      <PillText>{children}</PillText>
    </PillContainer>
  );
}
