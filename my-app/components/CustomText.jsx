import React from 'react';
import styled from 'styled-components';

const StyledTextContainer = styled.div`
  width: 70%;
`;

const StyledParagraph = styled.p`
  line-height: 24px;
  font-size: 18px;
  margin-bottom: 12px;
`;

const StyledTitle = styled.h1`
  font-size: 36px;
`;

const StyledHeadline = styled.p`
  font-size: 24px;
  line-height: 30px;
`;

export function TextContainer ({children}) {
  return (
    <StyledTextContainer>{children}</StyledTextContainer>
  )
}

export function Paragraph ({children}) {
  return (
    <StyledParagraph>{children}</StyledParagraph>
  )
}

export function Title ({children, className}) {
  return (
    <StyledTitle className={className}>{children}</StyledTitle>
  )
}

export function Headline ({children, className}) {
  return (
    <StyledHeadline className={className}>{children}</StyledHeadline>
  )
}

