import React, { useContext } from "react";
import styled, { css } from "styled-components";
import ThemeContext from "@/app/context/ThemeContext";
import { darkMode, lightMode } from "../constants/palette";

const HamburgerButton = styled.button`
  position: relative;
  width: 30px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
`;

const Line = styled.span`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) =>
    theme === "lightMode" ? darkMode.Secondary : lightMode.Secondary};
  transition: transform 0.3s ease, top 0.3s ease, opacity 0.3s ease;
  position: absolute;

  &:nth-child(1) {
    top: 0;
    ${({ isopen }) =>
      isopen &&
      css`
        transform: rotate(315deg);
        top: 8px;
      `}
  }

  &:nth-child(2) {
    top: 16px;
    ${({ isopen }) =>
      isopen &&
      css`
        transform: rotate(-315deg);
        top: 8px;
      `}
  }
`;

const MobileHamburger = ({ isopen, toggle }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <HamburgerButton onClick={toggle}>
      <Line $isopen={isopen} theme={theme} />
      <Line $isopen={isopen} theme={theme} />
    </HamburgerButton>
  );
};

export default MobileHamburger;
