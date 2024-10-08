"use client";
import React, { useState, useContext, useEffect } from "react";
import ThemeContext from "@/app/context/ThemeContext";
import styled from "styled-components";
import { lightMode, darkMode } from "../constants/palette";
import { mobileBreakpoint } from "../constants/breakpoint";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px; 

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    font-size: 16.1px; 

  p {
    margin-left: 6px;

    @media (max-width: ${mobileBreakpoint}) {
      margin-left: 0;
      margin-top: 4px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme === "lightMode" ? darkMode.Background : lightMode.Background};
  position: relative;

  @media (max-width: ${mobileBreakpoint}) {
    width: 46px; 
    height: 23px; 
    border-radius: 11.5px; 
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) =>
    theme === "lightMode" ? lightMode.Background : lightMode.Text};
  border-radius: 50%;
  position: absolute;
  left: ${({ toggled }) => (toggled ? "calc(100% - 20px)" : "0")};
  transition: left 0.3s ease;
  top: 50%; /* Center vertically */
  transform: translateY(-50%);

  @media (max-width: ${mobileBreakpoint}) {
    width: 25px; /* 15% larger */
    height: 25px; /* 15% larger */
    left: ${({ toggled }) => (toggled ? "calc(100% - 25px)" : "0")};
  }
`;

const PillButton = () => {
  const [toggled, setToggled] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    setToggled(!toggled);
    setTheme(theme === "lightMode" ? "darkMode" : "lightMode");
  };

  useEffect(() => {}, [handleToggle]);

  return (
    <Wrapper>
      <ButtonContainer theme={theme}>
        <Button onClick={handleToggle}>
          <Circle toggled={toggled} theme={theme} />
        </Button>
      </ButtonContainer>
      {!toggled ? <p>dark</p> : <p>light</p>}
    </Wrapper>
  );
};

export default PillButton;
