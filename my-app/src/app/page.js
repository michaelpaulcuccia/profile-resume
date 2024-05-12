"use client";
import React, { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import styled from "styled-components";
import { lightMode, darkMode } from "../../constants/palette";

const Root = styled.div`
  color: ${({ theme }) =>
    theme === "lightMode" ? lightMode.Text : darkMode.Text};
  background-color: ${({ theme }) =>
    theme === "lightMode" ? lightMode.Background : darkMode.Background};

  padding-left: 18px;

  .title {
    margin-top: 50px;
    margin-bottom: 20px;
  }

  .headline {
    font-size: 24px;
    margin-bottom: 40px;
  }

  .body {
    font-size: 14px;
  }
`;

export default function page() {
  const { theme } = useContext(ThemeContext);

  return (
    <Root theme={theme}>
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
    </Root>
  );
}
