import React from "react";
import styled from "styled-components";
import { mobileBreakpoint } from "../constants/breakpoint";
import CustomLink from "./CustomLink";
import PillButton from "./Pillbutton";

const Util = styled.div`
  padding: 16px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    align-items: flex-start;
  }

  .self {
    flex: 1;
    @media (max-width: ${mobileBreakpoint}) {
      padding-bottom: 4px;
    }
  }

  .add-pad {
    padding-left: 30px;

    @media (max-width: ${mobileBreakpoint}) {
      padding-bottom: 4px;
      padding-left: 0;
    }
  }

  :nth-child(4) {
    padding-right: 45px;

    @media (max-width: ${mobileBreakpoint}) {
      padding-right: 0;
      padding-bottom: 12px;
    }
  }
`;

export default function UtilityNav() {
  return (
    <>
      <Util>
        <CustomLink className="self" href="/">
          home
        </CustomLink>
        <CustomLink className="add-pad" href="/work">
          work
        </CustomLink>
        <CustomLink className="add-pad" href="/code">
          code
        </CustomLink>
        <CustomLink className="add-pad" href="/play">
          play
        </CustomLink>
        <div>
          <PillButton />
        </div>
      </Util>
    </>
  );
}
