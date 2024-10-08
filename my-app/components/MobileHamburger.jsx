import React from "react";
import styled, { css } from "styled-components";

const HamburgerButton = styled.button`
  position: relative;
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10; /* Ensures it is above other content */
`;

const Line = styled.span`
  width: 100%;
  height: 4px;
  background-color: white;
  transition: transform 0.3s ease, opacity 0.3s ease;
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
  return (
    <HamburgerButton onClick={toggle}>
      <Line isopen={isopen} />
      <Line isopen={isopen} />
    </HamburgerButton>
  );
};

export default MobileHamburger;
