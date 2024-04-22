"use client";
import React from 'react';
import styled from 'styled-components';
import Pillbutton from '../../components/pillbutton';

const Root = styled.div`
  background-color: yellow;
  color: black;
`;

export default function page() {
  return (
    <Root>
      <Pillbutton />
    </Root>
  )
}
