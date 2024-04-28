import React from "react";
import xogeneLogo from "../../public/assets/xogene_logo.jpeg";
import TabFlex from "./TabFlex";
import { items } from "../../constants/items";

export default function Xogene() {
  return (
    <>
      <TabFlex tabTitle={items[1]} logo={xogeneLogo} />
      <p>
        In June 2020 I was hired by Xogene as an itern and worked as a Junior
        Frontend Developer.
      </p>
    </>
  );
}
