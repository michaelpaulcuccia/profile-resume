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
        <Paragraph>
          I was hired by designory in April 2021 as a contract employee. In August 2021, I was offered a full-time position as a Junior Engineer. Not long after, that role evolved into Junior Engineer II and then to Engineer by May 2023.
        </Paragraph>
        <Paragraph>
          At designory, the majority of my work was for a Pharmacuetical client. I worked on building, updating, and maintaining nearly two dozen websites. These sites were composed of a variety of design systems, technologies, and methodologies. Workstreams were managed through complex branching systems and sandboxes were deployed manually on a custom secure server, as were necessary for client and regulatory demands.
        </Paragraph>
        <Paragraph>
          In addition to Pharma work, I had been tasked to assist other clients with WebGL, CMS, and many quick-turnaround "microsites".  
        </Paragraph>
        <Paragraph>
          I had an incredible experience working at designory. I worked with a wonderful team, got to be a part of amazing work, and always took incredible pride in the quality we provided our client. Feel free to inquire about references.
        </Paragraph>
        <div style={{ marginBottom: '24px'}}></div>
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
        <div style={{ marginBottom: '24px'}}></div>
        <Paragraph>
          I was offered a short-term paid contract with Xogene to contribute to the development of a standalone tool for managing specific clinical trial data. This experience was mutually beneficial, resulting in the successful creation of a prototype application.
        </Paragraph>
        <div style={{ marginBottom: '24px'}}></div>
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
        <div style={{ marginBottom: '24px'}}></div>
        <Paragraph>
          Following my deciscion to leave public service I enrolled in Rutgers Coding Bootcamp. This was a 12-week, full-time, in-person program at their Somerset, NJ campus.
        </Paragraph>
        <Paragraph>
          This course introduced me to the fundamentals of web programming through HTML, CSS, and JavaScript and then moved into more complex aspects such as backend development with Node.js, API's, and databases such as MySQL and MongoDB. The program also covered jQuery and Express-Handlebars before moving into React development.
        </Paragraph>
        <div style={{ marginBottom: '24px'}}></div>
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
        <Paragraph>
          I joined the US Attorney's Office as a Legal Assistant and was assigned to the Criminal Division. I was promoted to Paralegal Specialist in April 2007.
        </Paragraph>
        <Paragraph>
          As a Paralegal, I participated in over 30 Federal Trials, hundreds of Grand Jury investigations, and thousands of criminal proceedings. 
        </Paragraph>
        <Paragraph>
          After almost twenty years of government service, I decided to resign following the Government Shutdown on 2018 and pursue a new career option. 
        </Paragraph>
      </TextContainer>
      <div style={{ marginBottom: '30px'}}></div>
      <TextContainer>
        <Headline>US Army</Headline>
        <Paragraph>August 2001 - June 2003</Paragraph>
        <div style={{ marginBottom: '18px'}}></div>
        <Paragraph>
          My military career began at Fort Jackson, South Carolina where I attended Basic Combat Training and Advanced Individual Training for Personnel Services.
        </Paragraph>
        <Paragraph>
          I was assigned to the Headquarters Company of the 1st Armored Division in Weisbaden, Germany. My job was to conduct Line of Duty Investigations to ensure soldiers, and their families recieved benefits. I was also assigned as Congressional Liason for all inquries requested from the various offices of the United States Government. 
        </Paragraph>
        <Paragraph>
          I recieved an Honorable Discharge.
        </Paragraph>
      </TextContainer>
      <div style={{ marginBottom: '60px'}}></div>
    </PageWrapper>
  )
}
