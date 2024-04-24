import React from 'react';
import Image from 'next/image';
import rutgersLogo from '../public/assets/rutgers_logo.jpeg';
import styled from 'styled-components';

const Root = styled.div``;

const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  h3 {
    margin-left: 12px;
  }
`;

export default function Rutgers() {
  return (
    <Root>
       <Flex>
          <Image 
                src={rutgersLogo}
                width={100}
                height={100}
                alt="Rutgers"
            />
          <h3>Rutgers</h3>
      </Flex>
        <p>In September 2019 I enrolled in Rutgers Coding Bootcamp.</p>
    </Root>
  )
}
