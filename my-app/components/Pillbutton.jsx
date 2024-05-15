"use client";
import React, { useState, useContext, useEffect } from "react";
import ThemeContext from "@/app/context/ThemeContext";
import styled from "styled-components";
import { lightMode, darkMode } from "../constants/palette";
import { mobileBreakpoint } from "../constants/breakpoint";

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    align-items: flex-end;
  }

  p {
    margin-left: 6px;

    @media (max-width: ${mobileBreakpoint}) {
      margin-left: 0;
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
  height: 21px;
  background-color: ${({ theme }) =>
    theme === "lightMode" ? lightMode.Background : lightMode.Text};
  border-radius: 50%;
  position: absolute;
  left: ${({ toggled }) => (toggled ? "calc(100% - 20px)" : "0")};
  transition: left 0.3s ease;
  top: 10px;
  transform: translateY(-50%);
`;

const PillButton = () => {
  const [toggled, setToggled] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    setToggled(!toggled);
    if (theme === "lightMode") {
      setTheme("darkMode");
    } else if (theme === "darkMode") {
      setTheme("lightMode");
    }
  };

  useEffect(() => {}, [handleToggle]);

  return (
    <Wrapper>
      <ButtonContainer theme={theme}>
        <Button onClick={handleToggle}>
          <Circle toggled={toggled} theme={theme} />
        </Button>
      </ButtonContainer>
      <>{!toggled ? <p>dark</p> : <p>light</p>}</>
    </Wrapper>
  );
};

export default PillButton;
