import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "@/app/context/ThemeContext";
import { darkMode, lightMode } from "../constants/palette";

const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isopen }) => (isopen ? "0" : "-100%")};
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) =>
    theme === "lightMode" ? lightMode.Background : darkMode.Background};
  color: ${({ theme }) =>
    theme === "lightMode" ? lightMode.Text : darkMode.Text};
  transition: left 0.4s ease;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const MobileMenu = ({ isopen, children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <MobileMenuContainer isopen={isopen} theme={theme}>
      <MenuContent>{children}</MenuContent>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
