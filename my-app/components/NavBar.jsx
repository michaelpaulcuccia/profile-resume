import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DisplayContainer from './DisplayContainer';
import Designory from './Designory';
import Xogene from './Xogene';
import Rutgers from './Rutgers';
import USAttorney from './USAttorney';
import USArmy from './USArmy';
import AboutMe from './AboutMe';
import { mobileBreakpoint } from '../constants/breakpoint';

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

    &:hover {
        font-weight: bold;
    }

    @media (max-width: ${mobileBreakpoint}) {
        margin-bottom: 8px;
    }
`;

const items = [
    "Designory",
    "Xogene",
    "Rutgers",
    "US Attorney's Office",
    "US Army",
    "About Me"
];

export default function NavBar() {

    const [itemChose, setItemChose] = useState('');
    let itemToString = String(itemChose);

    const handleClick = (item) => {
        setItemChose(item);   
    };

    useEffect(() => {},[itemChose]);

  return (
    <>
        <Nav>
            {
                items.map((item, i) => (
                    <ItemContainer 
                        key={i} 
                        onClick={() => handleClick(item)}
                    >
                        {item}
                    </ItemContainer>
                ))
            }
        </Nav>
            {
                itemToString === items[0] ? <DisplayContainer><Designory /></DisplayContainer> :
                itemToString === items[1] ? <DisplayContainer><Xogene/></DisplayContainer> :
                itemToString === items[2] ? <DisplayContainer><Rutgers/></DisplayContainer> :
                itemToString === items[3] ? <DisplayContainer><USAttorney></USAttorney></DisplayContainer> :
                itemToString === items[4] ? <DisplayContainer><USArmy/></DisplayContainer> :
                itemToString === items[5] ? <DisplayContainer><AboutMe /></DisplayContainer> :
                <></>
            }
    </>
  )
}
