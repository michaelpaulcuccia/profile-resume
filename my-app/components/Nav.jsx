"use client";
import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../src/app/context/ThemeContext";
import CustomLink from "./CustomLink";
import { lightMode, darkMode } from "../constants/palette";
import PillButton from "./Pillbutton";

const Util = styled.div`
  padding: 16px;
  display: flex;
  justify-content: flex-end;

  .add-pad {
    padding-left: 30px;
  }

  :nth-child(3) {
    padding-right: 45px;
  }
`;

const Hero = styled.div`
  color: ${({ theme }) =>
    theme === "lightMode" ? lightMode.Text : darkMode.Text};
  background-color: ${({ theme }) =>
    theme === "lightMode" ? lightMode.Background : darkMode.Background};
  padding-left: 18px;
  -webkit-font-smoothing: antialiased;

  .title {
    margin-top: 50px;
    margin-bottom: 20px;
  }

  .headline {
    font-size: 24px;
    margin-bottom: 40px;
  }

  .body {
    line-height: 18px;
    color: ${({ theme }) =>
    theme === "lightMode" ? lightMode.Secondary : darkMode.Secondary};
  }
`;

export default function Nav() {

  const { theme } = useContext(ThemeContext);

  return (
    <>
    <Util>
      <CustomLink className="add-pad" href='/work'>work</CustomLink>
      <CustomLink className="add-pad" href='/code'>code</CustomLink>
      <CustomLink className="add-pad" href='/play'>play</CustomLink>
      <div>
        <PillButton />
      </div>
    </Util>
    <Hero theme={theme}>
      <h1 className="title">Michael-Paul Cuccia.</h1>
      <p className="headline">
        website fabrication. application construction. brand amplification.
      </p>
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
