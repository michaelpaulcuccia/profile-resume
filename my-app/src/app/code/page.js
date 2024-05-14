"use client";
import React from 'react';
import styled from 'styled-components';
import PageWrapper from '../../../components/PageWrapper';
import Image from 'next/image';
import CustomLink from '../../../components/CustomLink';
import { TextContainer, Title, Paragraph, PillContainer } from '../../../components/CustomText';
import Pill from '../../../components/Pill';
import { eliquisTech, clinicalTrialsTech, profileTech } from '../../../constants/technologies';
import Eliquis from '../../../public/assets/eliquis.png';
import ClinicalTrials from '../../../public/assets/clinical-trials.png';
import Profile from '../../../public/assets/profile.png';

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
              <Paragraph>A rebuild of the Eliquis homepage using some existing images and content but with an improvised design.</Paragraph>
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
              <Paragraph>This project accesses data in publicly available in clinicaltrials.gov. It allows users to search for studies with through a text field and provides a detailed response.</Paragraph>
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
        <Box>
          <div className='image-container'>
            <Image
              src={Profile}
              width={150}
              height={75}
              alt="Profile Resume"
            />
          </div>
          <div className='content-container'>
            <CustomLink href='https://profile-resume-tawny.vercel.app/' target="_blank">
              <Title>Profile-Resume</Title>
            </CustomLink>
            <div style={{ marginBottom: '12px'}}></div>
              <Paragraph>See the code behind this site!</Paragraph>
              <div style={{ marginBottom: '18px'}}></div>
              <StyledPillContainer>
                {
                  profileTech.map((item, i) => (
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
