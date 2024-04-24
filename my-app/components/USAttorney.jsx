import React from 'react';
import Image from 'next/image';
import usAttorneyLogo from '../public/assets/usattorneys_logo.jpeg';
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

export default function USAttorney () {
  return (
    <Root>
      <Flex>
          <Image 
                src={usAttorneyLogo}
                width={100}
                height={100}
                alt="US Attorneys"
            />
          <h3>US Attorney's Office</h3>
      </Flex>
        <p>In September 2004 I was hired by the US Attorney's Office as a Legal Assistant.</p>
        <p>In April 2007, I was promoted to Paralegal Specialist.</p>
    </Root>
  )
}
