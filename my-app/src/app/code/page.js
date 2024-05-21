"use client";
import React from "react";
import styled from "styled-components";
import PageWrapper from "../../../components/PageWrapper";
import Image from "next/image";
import CustomLink from "../../../components/CustomLink";
import {
  TextContainer,
  Title,
  Paragraph,
  PillContainer,
  Headline,
} from "../../../components/CustomText";
import { mobileBreakpoint } from "../../../constants/breakpoint";
import Pill from "../../../components/Pill";
import {
  eliquisTech,
  clinicalTrialsTech,
  bjjTech,
  sellersmarketTech,
  bjjtrackerTech,
  tremoloTech,
} from "../../../constants/technologies";
import Eliquis from "../../../public/assets/eliquis.png";
import ClinicalTrials from "../../../public/assets/clinical-trials.png";
import BJJ from "../../../public/assets/BJJ.png";
import Tremelo from "../../../public/assets/Tremelo.png";

const Box = styled.div`
  display: flex;
  max-width: 80%;
  margin-bottom: 40px;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    max-width: 100%;
  }

  .image-container {
    margin-right: 32px;

    @media (max-width: ${mobileBreakpoint}) {
      margin: 0 auto 18px;
    }
  }
`;

const HerokuBox = styled.div`
  display: flex;
  margin-bottom: 40px;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
  }

  .text-side {
    width: 60%;
    margin-right: 8px;

    @media (max-width: ${mobileBreakpoint}) {
      width: 100%;
    }
  }
`;

const StyledPillContainer = styled(PillContainer)`
  width: 100%;
`;

const HerokuPillContainer = styled(PillContainer)`
  width: 40%;

  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
    margin-top: 12px;
  }
`;

export default function page() {
  return (
    <>
      <PageWrapper>
        <TextContainer>
          <Box>
            <div className="image-container">
              <Image src={Tremelo} width={175} height={100} alt="..." />
            </div>
            <div>
              <CustomLink
                href="https://next-system-ivory.vercel.app/"
                target="_blank"
              >
                <Title>Tremelo</Title>
              </CustomLink>
              <div style={{ marginBottom: "12px" }}></div>
              <Paragraph>In progress...</Paragraph>
              <Paragraph>
                This application is my version of "Reverb", an online
                marketplace for buying and selling new, used, and vintage
                musical instruments.
              </Paragraph>
              <div style={{ marginBottom: "18px" }}></div>
              <StyledPillContainer>
                {tremoloTech.map((item, i) => (
                  <Pill key={i}>{item}</Pill>
                ))}
              </StyledPillContainer>
            </div>
          </Box>
          <Box>
            <div className="image-container">
              <Image src={Eliquis} width={175} height={100} alt="Eliquis" />
            </div>
            <div>
              <CustomLink
                href="https://eliquis-rebuild.vercel.app/"
                target="_blank"
              >
                <Title>Eliquis Rebuild</Title>
              </CustomLink>
              <div style={{ marginBottom: "12px" }}></div>
              <Paragraph>
                A rebuild of the Eliquis homepage using some existing images and
                content but with an improvised design.
              </Paragraph>
              <div style={{ marginBottom: "18px" }}></div>
              <StyledPillContainer>
                {eliquisTech.map((item, i) => (
                  <Pill key={i}>{item}</Pill>
                ))}
              </StyledPillContainer>
            </div>
          </Box>
          <Box>
            <div className="image-container">
              <Image
                src={ClinicalTrials}
                width={175}
                height={100}
                alt="Clinical Trials"
              />
            </div>
            <div>
              <CustomLink
                href="https://clinicaltrialsgatsby.vercel.app/"
                target="_blank"
              >
                <Title>Clinical Trials</Title>
              </CustomLink>
              <div style={{ marginBottom: "12px" }}></div>
              <Paragraph>
                This project accesses data publicly available at
                clinicaltrials.gov. It allows users to search for studies with
                through a text field and provides a detailed response.
              </Paragraph>
              <div style={{ marginBottom: "18px" }}></div>
              <StyledPillContainer>
                {clinicalTrialsTech.map((item, i) => (
                  <Pill key={i}>{item}</Pill>
                ))}
              </StyledPillContainer>
            </div>
          </Box>
          <Box>
            <div className="image-container">
              <Image src={BJJ} width={175} height={100} alt="BJJ" />
            </div>
            <div>
              <CustomLink
                href="https://bjjd-esign-system-9shxpknrh-michaelpaulcuccia.vercel.app/"
                target="_blank"
              >
                <Title>Brazilian Jiu Jitsu Design System</Title>
              </CustomLink>
              <div style={{ marginBottom: "12px" }}></div>
              <Paragraph>
                A template for a website that would provide information on
                various Brazilian Jiu Jitsu positions, attacks/defenses, and
                terminology
              </Paragraph>
              <div style={{ marginBottom: "18px" }}></div>
              <StyledPillContainer>
                {bjjTech.map((item, i) => (
                  <Pill key={i}>{item}</Pill>
                ))}
              </StyledPillContainer>
            </div>
          </Box>
        </TextContainer>
        <Headline>
          Please view code for projects previously deployed to Heroku.
        </Headline>
        <div style={{ marginBottom: "18px" }}></div>
        <HerokuBox>
          <div className="text-side">
            <CustomLink
              href="https://github.com/michaelpaulcuccia/sellersmarket/"
              target="_blank"
            >
              <p style={{ fontSize: "20px" }}>Sellers Market</p>
            </CustomLink>
            <div style={{ marginBottom: "12px" }}></div>
            <p>
              This project is an climbing equipment store. It provides users
              with authenticated access where they can browse, purchase, and
              manage their shopping carts. The platform features administrative
              functionalities enabling authorized personnel to add, delete, and
              update product listings. The application also includes PayPal
              intergration.
            </p>
          </div>
          <HerokuPillContainer>
            <div style={{ marginBottom: "12px" }}></div>
            {sellersmarketTech.map((item, i) => (
              <Pill key={i}>{item}</Pill>
            ))}
          </HerokuPillContainer>
        </HerokuBox>
        <HerokuBox>
          <div className="text-side">
            <CustomLink
              href="https://github.com/michaelpaulcuccia/attendanceTrackerApp/"
              target="_blank"
            >
              <p style={{ fontSize: "20px" }}>BJJ Attendance Tracker</p>
            </CustomLink>
            <div style={{ marginBottom: "12px" }}></div>
            <p>
              In this application, students simply choose their name on a
              dropdown menu and a function will capture the current time during
              check-in and compare to the class schedule, selecting a class that
              occurs that day within 15 minutes before or 20 minutes after that
              class's designated start time. Function will update students
              overall attendance, as well as attendance type based on a specific
              type of class. There is also admin access to create, read, update,
              and delete data in both the class and student collections.
            </p>
          </div>
          <HerokuPillContainer>
            <div style={{ marginBottom: "12px" }}></div>
            {bjjtrackerTech.map((item, i) => (
              <Pill key={i}>{item}</Pill>
            ))}
          </HerokuPillContainer>
        </HerokuBox>
      </PageWrapper>
    </>
  );
}
