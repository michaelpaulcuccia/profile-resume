"use client";
import React from 'react';
import styled from 'styled-components';
import PageWrapper from '../../../components/PageWrapper';
import Image from 'next/image';
import CustomLink from '../../../components/CustomLink';
import { TextContainer, Title, Paragraph, PillContainer } from '../../../components/CustomText';
import Pill from '../../../components/Pill';
import { eliquisTech, clinicalTrialsTech } from '../../../constants/technologies';
import Eliquis from '../../../public/assets/eliquis.png';
import ClinicalTrials from '../../../public/assets/clinical-trials.png';

const Box = styled.div`
  display: flex;
  max-width: 60%;
  margin-bottom: 40px;

  .image-container {
    margin-right: 24px;
  }
`;

const StyledPillContainer = styled(PillContainer)`
  width: 100%;
`;

export default function page() {
  return (
    <PageWrapper>
      <TextContainer>
        <Box>
          <div className='image-container'>
            <Image
              src={Eliquis}
              width={150}
              height={75}
              alt="Eliquis"
            />
          </div>
          <div className='content-container'>
            <CustomLink href='https://eliquis-rebuild.vercel.app/' target="_blank">
              <Title>Eliquis Rebuild</Title>
            </CustomLink>
            <div style={{ marginBottom: '12px'}}></div>
              <Paragraph>For this project, I decided to do a quick rebuild of the Eliquis homepage.</Paragraph>
              <div style={{ marginBottom: '18px'}}></div>
              <StyledPillContainer>
                {
                  eliquisTech.map((item, i) => (
                    <Pill key={i}>{item}</Pill>
                  ))
                }
              </StyledPillContainer>
          </div>
        </Box>
        <Box>
          <div className='image-container'>
            <Image
              src={ClinicalTrials}
              width={150}
              height={75}
              alt="Clinical Trials"
            />
          </div>
          <div className='content-container'>
            <CustomLink href='https://clinicaltrialsgatsby.vercel.app/' target="_blank">
              <Title>Clinical Trials</Title>
            </CustomLink>
            <div style={{ marginBottom: '12px'}}></div>
              <Paragraph>...</Paragraph>
              <div style={{ marginBottom: '18px'}}></div>
              <StyledPillContainer>
                {
                  clinicalTrialsTech.map((item, i) => (
                    <Pill key={i}>{item}</Pill>
                  ))
                }
              </StyledPillContainer>
          </div>
        </Box>
      </TextContainer>
    </PageWrapper>
  )
}
