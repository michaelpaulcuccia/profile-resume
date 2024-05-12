"use client";
import React from "react";
import styled from "styled-components";
import PillButton from "./Pillbutton";

const Root = styled.div`
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

export default function Nav() {
  return (
    <Root>
      <div className="add-pad">work</div>
      <div className="add-pad">code</div>
      <div className="add-pad">play</div>
      <div>
        <PillButton />
      </div>
    </Root>
  );
}
