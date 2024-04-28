import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import HeroImage from "../public/assets/mpc.png";
import GitHub from "../public/assets/GitHub.png";
import LinkedIn from "../public/assets/LinkedIn.jpeg";
import { mobileBreakpoint } from "../constants/breakpoint";

const Root = styled.div`
  display: flex;
  padding: 0 60px;
  letter-spacing: 1.5px;

  @media (max-width: ${mobileBreakpoint}) {
    padding: 0 10px;
  }

  h1 {
    font-size: 42px;

    @media (max-width: ${mobileBreakpoint}) {
      font-size: 36px;
      margin-top: 24px;
    }
  }

  h2 {
    font-size: 34px;

    @media (max-width: ${mobileBreakpoint}) {
      font-size: 28px;
    }
  }

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
`;

const LinksFlex = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const IconWithLinkContainer = styled.div`
  margin-left: 6px;
  margin-right: 6px;
`;

export default function Hero() {
  return (
    <Root>
      <Image
        src={HeroImage}
        width={275}
        height={275}
        alt="Michael-Paul Cuccia"
        style={{ borderRadius: "12px" }}
      />
      <ContentContainer>
        <h1>Michael-Paul Cuccia</h1>
        <h2>Full Stack Developer</h2>
        <h4>Austin, Texas</h4>
        <br />
        <h4>Former Paralegal Specialist (US Department of Justice)</h4>
        <h4>United States Army Veteran</h4>
        <LinksFlex>
          <IconWithLinkContainer>
            <Link href="https://github.com/michaelpaulcuccia" target="_blank">
              <Image
                src={GitHub}
                width={40}
                height={40}
                alt="GitHub"
                style={{ borderRadius: "12px" }}
              />
            </Link>
          </IconWithLinkContainer>
          <IconWithLinkContainer>
            <Link
              href="https://www.linkedin.com/in/michael-paul-cuccia-882607275/"
              target="_blank"
            >
              <Image
                src={LinkedIn}
                width={40}
                height={40}
                alt="LinkedIn"
                style={{ borderRadius: "12px" }}
              />
            </Link>
          </IconWithLinkContainer>
        </LinksFlex>
      </ContentContainer>
    </Root>
  );
}
