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
} from "../../../components/CustomText";
import { mobileBreakpoint } from "../../../constants/breakpoint";
import Pill from "../../../components/Pill";
import {
  eliquisTech,
  tremoloTech,
  soldiTech,
  pharmaTech,
  assessmentTech,
  lyceumTech,
} from "../../../constants/technologies";
import Eliquis from "../../../public/assets/eliquis.png";
import Tremelo from "../../../public/assets/Tremelo.png";
import Soldi from "../../../public/assets/Soldi.png";
import Pharma from "../../../public/assets/Pharma.png";
import Assessment from "../../../public/assets/Assessment.png";
import Lyceum from "../../../public/assets/Lyceum.png";

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
    width: 200px;
    height: 100px;
    flex-shrink: 0;

    @media (max-width: ${mobileBreakpoint}) {
      width: 100%;
      height: auto;
      margin: 0 auto 18px;
    }
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const StyledTitle = styled(Title)`
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #808080;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export default function page() {
  return (
    <>
      <PageWrapper>
        <TextContainer>
          <Paragraph>
            Please click on a project's headline to view live site.
          </Paragraph>
          <div style={{ marginBottom: "48px" }}></div>
          <Box>
            <div className="image-container">
              <Image src={Lyceum} width={200} height={100} alt="..." />
            </div>
            <div>
              <CustomLink
                href="https://lyceum-zeta.vercel.app/"
                target="_blank"
              >
                <StyledTitle>Lyceum (IN PROGRESS)</StyledTitle>
              </CustomLink>
              <div style={{ marginBottom: "12px" }}></div>
              <Paragraph>All-in-one digital book club.</Paragraph>
              <div style={{ marginBottom: "18px" }}></div>
              <PillContainer>
                {lyceumTech.map((item, i) => (
                  <Pill key={i}>{item}</Pill>
                ))}
              </PillContainer>
            </div>
          </Box>
          <Box>
            <div className="image-container">
              <Image src={Assessment} width={200} height={100} alt="..." />
            </div>
            <div>
              <CustomLink
                href="https://front-end-assessment-ashy.vercel.app/"
                target="_blank"
              >
                <StyledTitle>A Recent Frontend Assessment</StyledTitle>
              </CustomLink>
              <div style={{ marginBottom: "12px" }}></div>
              <Paragraph>
                Card Flip Game with emphasis on SEO, Cookies, and Accessibility.
              </Paragraph>
              <div style={{ marginBottom: "18px" }}></div>
              <PillContainer>
                {assessmentTech.map((item, i) => (
                  <Pill key={i}>{item}</Pill>
                ))}
              </PillContainer>
            </div>
          </Box>
          <Box>
            <div className="image-container">
              <Image src={Pharma} width={200} height={100} alt="..." />
            </div>
            <div>
              <CustomLink
                href="https://thepharmaindustry.vercel.app/"
                target="_blank"
              >
                <StyledTitle>The Pharma Industry</StyledTitle>
              </CustomLink>
              <div style={{ marginBottom: "12px" }}></div>
              <Paragraph>Pharmaceutical Data Dashboard.</Paragraph>
              <div style={{ marginBottom: "18px" }}></div>
              <PillContainer>
                {pharmaTech.map((item, i) => (
                  <Pill key={i}>{item}</Pill>
                ))}
              </PillContainer>
            </div>
          </Box>
          <Box>
            <div className="image-container">
              <Image src={Soldi} width={200} height={100} alt="..." />
            </div>
            <div>
              <CustomLink href="https://soldi-weld.vercel.app/" target="_blank">
                <StyledTitle>Soldi</StyledTitle>
              </CustomLink>
              <div style={{ marginBottom: "12px" }}></div>
              <Paragraph>Financial Insights Platform.</Paragraph>
              <div style={{ marginBottom: "18px" }}></div>
              <PillContainer>
                {soldiTech.map((item, i) => (
                  <Pill key={i}>{item}</Pill>
                ))}
              </PillContainer>
            </div>
          </Box>
          <Box>
            <div className="image-container">
              <Image src={Tremelo} width={200} height={100} alt="..." />
            </div>
            <div>
              <CustomLink
                href="https://next-system-ivory.vercel.app/"
                target="_blank"
              >
                <StyledTitle>Tremelo</StyledTitle>
              </CustomLink>
              <div style={{ marginBottom: "12px" }}></div>
              <Paragraph>Ecommerce Application.</Paragraph>
              <div style={{ marginBottom: "18px" }}></div>
              <PillContainer>
                {tremoloTech.map((item, i) => (
                  <Pill key={i}>{item}</Pill>
                ))}
              </PillContainer>
            </div>
          </Box>
          <Box>
            <div className="image-container">
              <Image src={Eliquis} width={200} height={100} alt="Eliquis" />
            </div>
            <div>
              <CustomLink
                href="https://eliquis-rebuild.vercel.app/"
                target="_blank"
              >
                <StyledTitle>Eliquis Rebuild</StyledTitle>
              </CustomLink>
              <div style={{ marginBottom: "12px" }}></div>
              <Paragraph>
                A rebuild of the Eliquis homepage using some existing images and
                content.
              </Paragraph>
              <div style={{ marginBottom: "18px" }}></div>
              <PillContainer>
                {eliquisTech.map((item, i) => (
                  <Pill key={i}>{item}</Pill>
                ))}
              </PillContainer>
            </div>
          </Box>
        </TextContainer>
      </PageWrapper>
    </>
  );
}
