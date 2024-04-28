import React from "react";
import usArmyLogo from "../../public/assets/us_army_logo.jpeg";
import TabFlex from "./TabFlex";
import { items } from "../../constants/items";

export default function USArmy() {
  return (
    <>
      <TabFlex tabTitle={items[4]} logo={usArmyLogo} />
      <p>In August 2001, I enlisted in the US Army.</p>
    </>
  );
}
