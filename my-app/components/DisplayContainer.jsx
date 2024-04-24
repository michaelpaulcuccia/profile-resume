import React, { useContext } from 'react';
import ThemeContext from '@/app/context/ThemeContext';
import styled from 'styled-components';
import { lightMode, darkMode } from '../constants/palette';

const Root = styled.div`
    border-color: ${({ theme }) => (theme === 'lightMode' ? lightMode.Text : darkMode.Text)};
    border-width: 1px;
    border-style: solid;
    border-radius: 12px;
    margin-top: 60px;
    padding: 24px 18px;

`;

export default function DisplayContainer({ children }) {

  const { theme } = useContext(ThemeContext);

  return (
    <Root theme={theme}>{children}</Root>
  )
}
