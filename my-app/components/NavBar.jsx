import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DisplayContainer from './DisplayContainer';
import Designory from './Designory';
import Xogene from './Xogene';
import Rutgers from './Rutgers';
import USAttorney from './USAttorney';
import USArmy from './USArmy';
import AboutMe from './AboutMe';

const Nav = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
`;

const ItemContainer = styled.div`
    cursor: pointer;

    &:hover {
        font-weight: bold;
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
                itemToString === 'Designory' ? <DisplayContainer><Designory /></DisplayContainer> :
                itemToString === 'Xogene' ? <DisplayContainer><Xogene/></DisplayContainer> :
                itemToString === 'Rutgers' ? <DisplayContainer><Rutgers/></DisplayContainer> :
                itemToString === "US Attorney's Office" ? <DisplayContainer><USAttorney></USAttorney></DisplayContainer> :
                itemToString === "US Army" ? <DisplayContainer><USArmy/></DisplayContainer> :
                itemToString === 'About Me' ? <DisplayContainer><AboutMe /></DisplayContainer> :
                <></>
            }
    </>
  )
}
