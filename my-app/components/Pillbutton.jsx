"use client";
import React, { useState, useContext, useEffect } from 'react';
import ThemeContext from '@/app/context/ThemeContext';
import styled from 'styled-components';
import { lightMode, darkMode } from '../constants/palette';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; 

  h3 {
    margin-top: 6px;
    display: inline;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  width: 100px; 
  height: 40px; 
  border-radius: 20px; 
  margin-right: 3px;
  background-color: ${({ theme }) => (theme === 'lightMode' ? lightMode.Primary : lightMode.Background)};
  border: ${({ theme }) => (theme === 'lightMode' ? '1px solid #007bff' : '1px solid #1a1a1a')};
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
  width: 40px; 
  height: 40px; 
  background-color: ${({ theme }) => (theme === 'lightMode' ? lightMode.Background : darkMode.Background)};
  border-radius: 50%; 
  position: absolute;
  left: ${({ toggled }) => (toggled ? 'calc(100% - 40px)' : '0')}; 
  transition: left 0.3s ease; 
  top: 19px; 
  transform: translateY(-50%); 
`;

const PillButton = () => {

  const [toggled, setToggled] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  console.log('pillbutton ' + theme)

  const handleToggle = () => {
    setToggled(!toggled);    
    if (theme === 'lightMode') {
      setTheme('darkMode');
    } else if (theme === 'darkMode') {
      setTheme('lightMode');
    }
  };

  useEffect(() => {

  },[handleToggle])

  return (
    <Wrapper>
        <ButtonContainer theme={theme}>
          <Button onClick={handleToggle}>
            <Circle toggled={toggled} theme={theme}/>
          </Button>
        </ButtonContainer>
        <>
          {
            !toggled ?
              <h3>light mode</h3>
            :
              <h3>dark mode</h3>
          }
        </>
    </Wrapper>
   
  );
};

export default PillButton;
