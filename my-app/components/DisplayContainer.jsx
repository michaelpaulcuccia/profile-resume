import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    border: 1px solid blue;
    border-radius: 6px;
    margin-top: 60px;
    padding: 24px 18px;

`;

export default function DisplayContainer({ children }) {
  return (
    <Root>{children}</Root>
  )
}
