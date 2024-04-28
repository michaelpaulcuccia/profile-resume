import React from "react";
import rutgersLogo from "../../public/assets/rutgers_logo.jpeg";
import TabFlex from "./TabFlex";
import { items } from "../../constants/items";

export default function Rutgers() {
  return (
    <>
      <TabFlex tabTitle={items[2]} logo={rutgersLogo} />
      <p>In September 2019 I enrolled in Rutgers Coding Bootcamp.</p>
    </>
  );
}
