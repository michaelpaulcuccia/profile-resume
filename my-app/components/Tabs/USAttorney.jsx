import React from "react";
import usAttorneyLogo from "../../public/assets/usattorneys_logo.jpeg";
import TabFlex from "./TabFlex";
import { items } from "../../constants/items";

export default function USAttorney() {
  return (
    <>
      <TabFlex tabTitle={items[3]} logo={usAttorneyLogo} />
      <p>
        In September 2004 I was hired by the US Attorney's Office as a Legal
        Assistant.
      </p>
      <p>In April 2007, I was promoted to Paralegal Specialist.</p>
    </>
  );
}
