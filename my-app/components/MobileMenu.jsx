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
  justify-content: space-around;
  align-items: center;
  height: 60%;
  width: 80%;
`;

const MobileMenu = ({ isopen }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <MobileMenuContainer isopen={isopen} theme={theme}>
      <MenuContent>
        <div>Menu Item 1</div>
        <div>Menu Item 2</div>
        <div>Menu Item 3</div>
      </MenuContent>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
