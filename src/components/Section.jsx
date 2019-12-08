import React from 'react';
import styled from 'styled-components';

import { StyledUl, StyledLi } from './Nav';

const StyledSection = styled.div`
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Section = () => (
  <StyledSection>
    <div id="skills">
      <h1>Skills</h1>
      <StyledUl>
        <StyledLi>HTML</StyledLi>
        <StyledLi>CSS</StyledLi>
        <StyledLi>JavaScript</StyledLi>
        <StyledLi>NodeJS</StyledLi>
        <StyledLi>React</StyledLi>
        <StyledLi>Redux</StyledLi>
        <StyledLi>Webpack</StyledLi>
      </StyledUl>
    </div>
    <div id="career">
      <h1>Carreira</h1>
      <StyledUl>
        <StyledLi>iClinic</StyledLi>
        <StyledLi>Arquivei</StyledLi>
        <StyledLi>Digital Innovation One</StyledLi>
        <StyledLi>Cohros</StyledLi>
      </StyledUl>
    </div>
  </StyledSection>
);

export default Section;
