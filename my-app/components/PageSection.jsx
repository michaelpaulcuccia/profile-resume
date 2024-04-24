'use client';
import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  padding: 10px;
`;

export default function PageSection({ children }) {
  return (
    <Root>{children}</Root>
  )
}
