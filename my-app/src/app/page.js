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
          In July 2024, I will be actively seeking a new role.
        </Paragraph>
        <Paragraph>
          My time with designory will be ending after three successful years of building websites for one of world's largest pharmacuetical companies, and for one of the most profitable cancer drugs on the market. Sadly, that client will be consolidating agencies and I will be included in staff reductions.
        </Paragraph>
        <div style={{ marginBottom: '40px'}}></div>
        <Paragraph>
          As a Frontend Engineer, my job is not only to bring designs to life but to ensure the best experience for the user. I strive to deliver accessible and responsive interfaces for clients and well-documented and maintainable code for developers.
        </Paragraph>
        <Paragraph>
          It is my goal to be part of a team that creates websites and applications that utilize modern technologies and design principles to keep pace with the ever evolving digital world. 
        </Paragraph>
        <Paragraph>
          If you would like to talk more, feel free to reach out <CustomLink href='mailto:michaelpaulcuccia@proton.me'><span style={{ textDecoration: 'underline'}}>by email</span></CustomLink> to me to learn more!
        </Paragraph>
      </TextContainer>
    </PageWrapper>
  );
}
