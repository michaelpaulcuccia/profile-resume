import React from 'react';
import Image from 'next/image';
import xogeneLogo from '../public/assets/xogene_logo.jpeg';
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

export default function Xogene() {
  return (
    <Root>
      <Flex>
        <Image 
              src={xogeneLogo}
              width={100}
              height={100}
              alt="Xogene"
          />
          <h3>Xogene</h3>
      </Flex>
        <p>In June 2020 I was hired by Xogene as an itern and worked as a Junior Frontend Developer.</p>
    </Root>
  )
}