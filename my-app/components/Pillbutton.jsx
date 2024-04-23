"use client";
import React, { useState } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  width: 100px; 
  height: 40px; 
  border-radius: 20px; 
  background-color: #f0f0f0; 
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
  background-color: #007bff; 
  border-radius: 50%; 
  position: absolute;
  left: ${({ toggled }) => (toggled ? 'calc(100% - 40px)' : '0')}; 
  transition: left 0.3s ease; 
  top: 20px; 
  transform: translateY(-50%); 
`;

const PillButton = () => {

  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!toggled);    
  };

  return (
    <ButtonContainer>
      <Button onClick={handleToggle}>
        <Circle toggled={toggled} />
      </Button>
    </ButtonContainer>
  );
};

export default PillButton;
