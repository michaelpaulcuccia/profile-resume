import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import HeroImage from '../public/assets/mpc.png';

const Root = styled.div`
    display: flex;
    padding: 0 60px;
    letter-spacing: 1.5px;

    h1 {
        font-size: 42px;
    }

    h2 {
        font-size: 34px;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`;

export default function Hero() {
  return (
    <Root>
        <Image 
            src={HeroImage}
            width={275}
            height={275}
            alt="Michael-Paul Cuccia"
            style={{ borderRadius: '12px' }}
        />
        <ContentContainer>
            <h1>Michael-Paul Cuccia</h1>
            <h2>Full Stack Developer</h2>
            <h4>Austin, Texas</h4>
            <br/>
            <h4>Former Paralegal Specialist (US Department of Justice)</h4>
            <h4>United States Army Veteran</h4>
        </ContentContainer>
    </Root>
  )
}
