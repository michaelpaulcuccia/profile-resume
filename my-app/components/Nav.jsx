"use client";
import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../src/app/context/ThemeContext";
import CustomLink from "./CustomLink";
import { lightMode, darkMode } from "../constants/palette";
import PillButton from "./Pillbutton";
import { Title, Headline } from "./CustomText";

const Util = styled.div`
  padding: 16px;
  display: flex;
  justify-content: flex-end;

  .self {
    flex: 1;
  }

 .add-pad {
    padding-left: 30px;
  }

  :nth-child(4) {
    padding-right: 45px;
  }
`;

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
    margin-bottom: 60px;
    color: ${({ theme }) =>
    theme === "lightMode" ? lightMode.Secondary : darkMode.Secondary};
  }
`;

export default function Nav() {

  const { theme } = useContext(ThemeContext);

  return (
    <>
    <Util>
        <CustomLink className='self' href='/'>home</CustomLink>
        <CustomLink className="add-pad" href='/work'>work</CustomLink>
        <CustomLink className="add-pad" href='/code'>code</CustomLink>
        <CustomLink className="add-pad" href='/play'>play</CustomLink>
      <div>
        <PillButton />
      </div>
    </Util>
    <Hero theme={theme}>
      <Title className="title">Michael-Paul Cuccia.</Title>
      <Headline className="headline">
        website fabrication. application construction. brand amplification.
      </Headline>
      <p className="body">
        As an expert in user-centric design and responsive development, I create
        <br />
        engaging online platforms that empower clients to connect with their
        audiences effortlessly.
      </p>
    </Hero>
    </>
  );
}
