import React, { useState } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* Horizontally center the circle */
  align-items: center; /* Vertically center the circle */
  width: 100px; /* Set the width of the button container */
  height: 40px; /* Set the height of the button container */
  border-radius: 20px; /* Ensure the container is pill-shaped */
  background-color: #f0f0f0; /* Light gray background */
  position: relative; /* Enable positioning of the circle */
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
  width: 40px; /* Set the width of the circle */
  height: 40px; /* Set the height of the circle to match container */
  background-color: #007bff; /* Blue color for the circle */
  border-radius: 50%; /* Ensure the circle is circular */
  position: absolute;
  left: ${({ toggled }) => (toggled ? 'calc(100% - 40px)' : '0')}; /* Position the circle based on toggled state */
  transition: left 0.3s ease; /* Smooth transition for movement */
  top: 20px; /* Center the circle vertically */
  transform: translateY(-50%); /* Center the circle vertically */
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
