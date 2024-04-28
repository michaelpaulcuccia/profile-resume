import React from "react";
import designoryLogo from "../../public/assets/designory_logo.jpeg";
import TabFlex from "./TabFlex";
import { items } from "../../constants/items";

export default function Designory() {
  return (
    <>
      <TabFlex tabTitle={items[0]} logo={designoryLogo} />
      <p>
        In April 2021, I was hired by designory as a contract Junior Engineer.
      </p>
      <p>
        In August 2021, I was hired as a permanent employee and later, promoted
        to Junior Engineer II.
      </p>
      <p>In May 2023, I was promoted to Engineer.</p>
    </>
  );
}
