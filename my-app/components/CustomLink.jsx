import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Item = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    font-weight: bold;
  }
`;
export default function CustomLink({ href, children, target, className }) {
  return (
    <Item href={href} className={className} target={target}>
      {children}
    </Item>
  );
}

CustomLink.defaultProps = {
  target: "_self",
};
