"use client";
import React from "react";
import PageWrapper from "../../components/PageWrapper";
import { TextContainer, Paragraph } from "../../components/CustomText";
import CustomLink from "../../components/CustomLink";

export default function page() {
  return (
    <PageWrapper>
      <TextContainer>
        <Paragraph>
          As a Frontend Engineer, my job is not only to bring designs to life
          but to ensure the best experience for the user. I strive to deliver
          accessible and responsive interfaces for clients and well-documented
          and maintainable code for developers.
        </Paragraph>
        <Paragraph>
          It is my goal to be part of a team that creates websites and
          applications that utilize modern technologies and design principles to
          keep pace with the ever evolving digital world.
        </Paragraph>
        <Paragraph>
          If you would like to talk more, feel free to reach out{" "}
          <CustomLink href="mailto:michaelpaulcuccia@proton.me">
            <span style={{ textDecoration: "underline" }}>by email</span>
          </CustomLink>{" "}
          to me to learn more!
        </Paragraph>
      </TextContainer>
    </PageWrapper>
  );
}
