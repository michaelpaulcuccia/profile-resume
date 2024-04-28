import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DisplayContainer from "./DisplayContainer";
import Designory from "./Tabs/Designory";
import Xogene from "./Tabs/Xogene";
import Rutgers from "./Tabs/Rutgers";
import USAttorney from "./Tabs/USAttorney";
import USArmy from "./Tabs/USArmy";
import AboutMe from "./Tabs/AboutMe";
import { mobileBreakpoint } from "../constants/breakpoint";
import { items } from "../constants/items";

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ItemContainer = styled.div`
  cursor: pointer;

  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};

  &:hover {
    font-weight: bold;
  }

  @media (max-width: ${mobileBreakpoint}) {
    margin-bottom: 8px;
  }
`;

export default function NavBar() {
  const [itemChose, setItemChose] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  let itemToString = String(itemChose);

  const handleClick = (item, i) => {
    setItemChose(item);
    setSelectedItem(i);
  };

  useEffect(() => {}, [itemChose]);

  return (
    <>
      <Nav>
        {items.map((item, i) => (
          <ItemContainer
            key={i}
            onClick={() => handleClick(item, i)}
            selected={i === selectedItem}
          >
            {item}
          </ItemContainer>
        ))}
      </Nav>
      {itemToString === items[0] ? (
        <DisplayContainer>
          <Designory />
        </DisplayContainer>
      ) : itemToString === items[1] ? (
        <DisplayContainer>
          <Xogene />
        </DisplayContainer>
      ) : itemToString === items[2] ? (
        <DisplayContainer>
          <Rutgers />
        </DisplayContainer>
      ) : itemToString === items[3] ? (
        <DisplayContainer>
          <USAttorney></USAttorney>
        </DisplayContainer>
      ) : itemToString === items[4] ? (
        <DisplayContainer>
          <USArmy />
        </DisplayContainer>
      ) : itemToString === items[5] ? (
        <DisplayContainer>
          <AboutMe />
        </DisplayContainer>
      ) : (
        <></>
      )}
    </>
  );
}
