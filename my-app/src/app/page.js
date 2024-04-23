"use client";
import React, { useContext } from 'react';
import ThemeContext from './context/ThemeContext';
import styled from 'styled-components';
import PageSection from '../../components/PageSection';
import Pillbutton from '../../components/Pillbutton';

const Root = styled.div`
  color: black;
`;

export default function page() {

  const { theme, setTheme } = useContext(ThemeContext);

  console.log(theme)

  return (
    <Root>
      <PageSection>
        <Pillbutton/>
      </PageSection>
    </Root>
  )
}
