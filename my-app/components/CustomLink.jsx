import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Item = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:hover {
        font-weight: bold;
    }
`;

export default function CustomLink({href, children, className}) {
  return (
    <Item href={href} className={className}>{children}</Item>
  )
}
