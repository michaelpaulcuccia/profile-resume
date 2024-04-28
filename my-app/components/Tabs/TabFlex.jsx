import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  h3 {
    margin-left: 12px;
  }
`;

export default function TabFlex({ tabTitle, logo }) {
  return (
    <Flex>
      <Image src={logo} width={100} height={100} alt={logo} />
      <h3>{tabTitle}</h3>
    </Flex>
  );
}
