"use client";
import React from 'react';
import Image from 'next/image';
import PageWrapper from '../../../components/PageWrapper';
import { TextContainer, Title, Paragraph } from '../../../components/CustomText';
import MPC from '../../../public/assets/mpc.png';

export default function page() {
  return (
    <PageWrapper>
      <TextContainer>
        <Title>about me</Title>
        <div style={{ marginBottom: '20px'}}></div>
          <Image
          src={MPC}
          width={275}
          height={275}
          alt="Michael-Paul Cuccia"
          style={{ borderRadius: "12px" }}
        />
        <div style={{ marginBottom: '20px'}}></div>
        <p>I live in Austin, Texas with my wife, our son, daughter, and two coonhounds.</p>
      </TextContainer>
      <div style={{ marginBottom: '45px'}}></div>
      <TextContainer>
        <Title>interests</Title>
        <div style={{ marginBottom: '20px'}}></div>
        <Paragraph>
          I try to get outside as much as possible. Living in the Texas Hill Country and being surrounded by such amazing nature is a blessing. I am also a Rock/Ice climber and skier, and have had many incredible mountain experiences.
        </Paragraph>
        <Paragraph>
          I have been training Brazilian Jiu Jitsu since 2007. The art and lifestyle of Jiu Jitsu, along with people I train with, are a huge part of my life. 
        </Paragraph>
        <Paragraph>
          I have been playing Bass Guitar for a few years and have made it a goal to be good enough to eventually play with a live band. I also play a little bit of acoustic six-string too.
        </Paragraph>
      </TextContainer>
    </PageWrapper>
  )
}
