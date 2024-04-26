"use client";
import React, { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import styled from "styled-components";
import { Inconsolata } from "next/font/google";
import { lightMode, darkMode } from "../../constants/palette";
import PageSection from "../../components/PageSection";
import Pillbutton from "../../components/Pillbutton";
import Hero from "../../components/Hero";
import NavBar from "../../components/NavBar";

const inconsolata = Inconsolata({ weight: ["400", "800"], subsets: ["latin"] });

const Root = styled.div`
  color: ${({ theme }) =>
    theme === "lightMode" ? lightMode.Text : darkMode.Text};
  background-color: ${({ theme }) =>
    theme === "lightMode" ? lightMode.Background : darkMode.Background};
  height: 100vh;
`;

export default function page() {
  const { theme } = useContext(ThemeContext);

  return (
    <Root theme={theme} className={inconsolata.className}>
      <PageSection>
        <Pillbutton />
      </PageSection>
      <PageSection>
        <Hero />
      </PageSection>
      <PageSection>
        <NavBar />
      </PageSection>
    </Root>
  );
}
