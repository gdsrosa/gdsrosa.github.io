import React from 'react';
import styled from 'styled-components';
import { StyledUl, StyledLi } from './Nav';

const StyledFooter = styled.footer`
  background-color: #44475a;
  height: 100px;
  color: #fff;
`;

const Footer = () => (
  <StyledFooter>
    <StyledUl>
      <StyledLi>Formação</StyledLi>
      <StyledLi>Social</StyledLi>
    </StyledUl>
  </StyledFooter>
);

export default Footer;
