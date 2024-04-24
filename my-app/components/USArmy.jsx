import React from 'react';
import Image from 'next/image';
import usArmyLogo from '../public/assets/us_army_logo.jpeg';
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

export default function USArmy() {
  return (
    <Root>
      <Flex>
          <Image 
                src={usArmyLogo}
                width={100}
                height={100}
                alt="US Army"
            />
          <h3>US Army</h3>
      </Flex>
        <p>In August 2001, I enlisted in the US Army.</p>
    </Root>
  )
}
