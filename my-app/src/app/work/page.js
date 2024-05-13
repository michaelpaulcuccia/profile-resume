"use client";
import React from 'react';
import PageWrapper from '../../../components/PageWrapper';
import { TextContainer, Title, Headline, Paragraph, PillContainer } from '../../../components/CustomText';
import { designoryTech, xogeneTech, rutgersTech } from '../../../constants/technologies';
import Pill from '../../../components/Pill';

export default function page() {
  return (
    <PageWrapper>
      <Title>Experience</Title>
      <div style={{ marginBottom: '30px'}}></div>
      <TextContainer>
        <Headline>designory</Headline>
        <Paragraph>April 2001 - July 2024</Paragraph>
        <div style={{ marginBottom: '18px'}}></div>
        <Paragraph>...</Paragraph>
        <PillContainer>
          {
            designoryTech.map((item, i) => (
              <Pill key={i}>{item}</Pill>
            ))
          }
        </PillContainer>
      </TextContainer>
      <div style={{ marginBottom: '30px'}}></div>
      <TextContainer>
        <Headline>Xogene (Internship)</Headline>
        <Paragraph>June 2020 - Oct 2020</Paragraph>
        <div style={{ marginBottom: '18px'}}></div>
        <Paragraph>...</Paragraph>
        <PillContainer>
          {
            xogeneTech.map((item, i) => (
              <Pill key={i}>{item}</Pill>
            ))
          }
        </PillContainer>
      </TextContainer>
      <div style={{ marginBottom: '30px'}}></div>
      <TextContainer>
        <Headline>CAREER CHANGE</Headline>
        <Headline>Rutgers Coding Bootcamp</Headline>
        <Paragraph>September 2019 - December 2019</Paragraph>
        <div style={{ marginBottom: '18px'}}></div>
        <Paragraph>...</Paragraph>
        <PillContainer>
          {
            rutgersTech.map((item, i) => (
              <Pill key={i}>{item}</Pill>
            ))
          }
        </PillContainer>
      </TextContainer>
      <div style={{ marginBottom: '30px'}}></div>
      <TextContainer>
        <Headline>US Attorney's Office</Headline>
        <Paragraph>September 2004 - January 2019</Paragraph>
        <div style={{ marginBottom: '18px'}}></div>
        <Paragraph>I joined the US Attorney's Office as a Legal Assistant and was assigned to the Criminal Division.</Paragraph>
      </TextContainer>
      <div style={{ marginBottom: '30px'}}></div>
      <TextContainer>
        <Headline>US Army</Headline>
        <Paragraph>August 2001 - June 2003</Paragraph>
        <div style={{ marginBottom: '18px'}}></div>
        <Paragraph>..............</Paragraph>
      </TextContainer>
    </PageWrapper>
  )
}
