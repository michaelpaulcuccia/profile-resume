import React from 'react';
import Image from 'next/image';
import designoryLogo from '../public/assets/designory_logo.jpeg';
import styled from 'styled-components';

const Root = styled.div``

const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  h3 {
    margin-left: 12px;
  }
`;

export default function Designory() {
  return (
    <Root>
      <Flex>
        <Image 
              src={designoryLogo}
              width={100}
              height={100}
              alt="designory"
          />
          <h3>designory</h3>
      </Flex>
        <p>In April 2021, I was hired by designory as a contract Junior Engineer.</p>
        <p>In August 2021, I was hired as a permanent employee and later, promoted to Junior Engineer II.</p>
        <p>In May 2023, I was promoted to Engineer.</p>
    </Root>
  )
}
