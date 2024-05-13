import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    padding: 24px 18px 12px 18px;
`;

export default function PageWrapper({children}) {
  return (
    <Root>{children}</Root>
  )
}
