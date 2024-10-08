"use client";
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import ThemeContext from "../src/app/context/ThemeContext";
//import CustomLink from "./CustomLink";
import { lightMode, darkMode } from "../constants/palette";
//import PillButton from "./Pillbutton";
import { Title, Headline } from "./CustomText";
//import { mobileBreakpoint } from "../constants/breakpoint";
import UtilityNav from "./UtilityNav";
import GitHub from "../public/assets/GitHub.png";
import LinkedIn from "../public/assets/LinkedIn.jpeg";

// const Util = styled.div`
//   padding: 16px;
//   display: flex;
//   justify-content: flex-end;

//   @media (max-width: ${mobileBreakpoint}) {
//     flex-direction: column;
//     align-items: flex-start;
//   }

//   .self {
//     flex: 1;
//     @media (max-width: ${mobileBreakpoint}) {
//       padding-bottom: 4px;
//     }
//   }

//   .add-pad {
//     padding-left: 30px;

//     @media (max-width: ${mobileBreakpoint}) {
//       padding-bottom: 4px;
//       padding-left: 0;
//     }
//   }

//   :nth-child(4) {
//     padding-right: 45px;

//     @media (max-width: ${mobileBreakpoint}) {
//       padding-right: 0;
//       padding-bottom: 12px;
//     }
//   }
// `;

const Hero = styled.div`
  color: ${({ theme }) =>
    theme === "lightMode" ? lightMode.Text : darkMode.Text};
  background-color: ${({ theme }) =>
    theme === "lightMode" ? lightMode.Background : darkMode.Background};
  padding-left: 18px;

  .title {
    margin-top: 60px;
    margin-bottom: 20px;
  }

  .headline {
    margin-bottom: 40px;
  }

  //Special Use, not included in CustomText
  .body {
    line-height: 18px;
    color: ${({ theme }) =>
      theme === "lightMode" ? darkMode.Secondary : lightMode.Secondary};
  }
`;

const IconWithLinkContainer = styled.div`
  margin-bottom: 30px;
  margin-top: 30px;

  a:first-of-type {
    margin-right: 6px;
  }

  a:nth-of-type(2) {
    margin-left: 6px;
  }
`;

export default function Nav() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <UtilityNav />
      <Hero theme={theme}>
        <Title className="title">Michael-Paul Cuccia.</Title>
        <Headline className="headline">
          website and application development. former paralegal. army veteran.
        </Headline>
        <p className="body">
          I create engaging online platforms that empower clients to make
          effortless connections with their audience.
        </p>
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
          <Link href="https://github.com/michaelpaulcuccia/" target="_blank">
            <Image
              src={GitHub}
              width={40}
              height={40}
              alt="GitHub"
              style={{ borderRadius: "12px" }}
            />
          </Link>
        </IconWithLinkContainer>
      </Hero>
    </>
  );
}
