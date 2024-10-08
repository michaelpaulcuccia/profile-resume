"use client";
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import ThemeContext from "../src/app/context/ThemeContext";
import { lightMode, darkMode } from "../constants/palette";
import { Title, Headline } from "./CustomText";
import UtilityNav from "./UtilityNav";
import GitHub from "../public/assets/GitHub.png";
import LinkedIn from "../public/assets/LinkedIn.jpeg";

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
    padding-right: 12px;
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
