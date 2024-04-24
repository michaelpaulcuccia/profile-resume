"use client";
import React from 'react';
import styled from 'styled-components';
import PageSection from '../../components/PageSection';
import Pillbutton from '../../components/Pillbutton';
import NavBar from '../../components/NavBar';

const Root = styled.div`
  color: black;
`;

export default function page() {

  return (
    <Root>
      <PageSection>
        <Pillbutton/>
      </PageSection>
      <PageSection>
        <NavBar />
      </PageSection>
    </Root>
  )
}
