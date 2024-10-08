"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import PageWrapper from "../../../components/PageWrapper";
import {
  TextContainer,
  Title,
  Paragraph,
} from "../../../components/CustomText";
import { mobileBreakpoint } from "../../../constants/breakpoint";
import MPC from "../../../public/assets/mpc.png";

const HeroImageContainer = styled.div`
  margin-top: 20px;

  @media (max-width: ${mobileBreakpoint}) {
    display: flex;
    justify-content: center;
  }
`;

export default function page() {
  return (
    <PageWrapper>
      <TextContainer>
        <Title>about me</Title>
        <HeroImageContainer>
          <Image
            src={MPC}
            width={275}
            height={275}
            alt="Michael-Paul Cuccia"
            style={{ borderRadius: "12px" }}
          />
        </HeroImageContainer>
        <div style={{ marginBottom: "20px" }}></div>
        <Paragraph>
          I live in Austin, Texas with my wife, son, daughter, and our two
          coonhounds.
        </Paragraph>
      </TextContainer>
      <div style={{ marginBottom: "45px" }}></div>
      <TextContainer>
        <Title>interests</Title>
        <div style={{ marginBottom: "20px" }}></div>
        <Paragraph>
          When I'm not coding, I try to get outside as much as possible. Living
          in the Texas Hill Country and being surrounded by all of this amazing
          nature is such a blessing. I enjoy hiking, mountain biking, fishing,
          and rock climbing.
        </Paragraph>
        <Paragraph>
          In 2007 I began training Brazilian Jiu Jitsu. The art and lifestyle of
          Jiu Jitsu along with people I train with are an important postive
          influence. I am currently a member of Team Renzo Gracie Lakeway.
        </Paragraph>
        <Paragraph>
          Music is something I love deeply, and has always played a huge part in
          my life. I regularly attend local shows and concerts. I also play bass
          guitar and a little a bit of six-string acoustic.
        </Paragraph>
      </TextContainer>
    </PageWrapper>
  );
}
