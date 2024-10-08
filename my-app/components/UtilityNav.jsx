import React, { useState } from "react";
import styled from "styled-components";
import { mobileBreakpoint } from "../constants/breakpoint";
import CustomLink from "./CustomLink";
import PillButton from "./Pillbutton";
import MobileHamburger from "./MobileHamburger";

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

  @media (max-width: ${mobileBreakpoint}) {
    display: none;
  }
`;

const Mobile = styled.div`
  display: none;

  @media (max-width: ${mobileBreakpoint}) {
    padding: 16px;
    display: flex;
  }
`;

export default function UtilityNav() {
  const [isopen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isopen);
  };
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
      <Mobile>
        <MobileHamburger isopen={isopen} toggle={toggleMenu} />
        hello mobile
      </Mobile>
    </>
  );
}
