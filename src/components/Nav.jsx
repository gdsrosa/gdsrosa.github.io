import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const StyledLi = styled.li`
  display: inline;
  margin-right: 5px;

  a:link {
    text-decoration: none;
    color: #fff;
  }
`;

const Nav = () => (
  <StyledUl>
    <StyledLi>
      <Link to="/me">Gabriel Rosa</Link>
    </StyledLi>
    <StyledLi>
      <Link to="/skills">Skills</Link>
    </StyledLi>
    <StyledLi>
      <Link to="/career">Carreira</Link>
    </StyledLi>
    <StyledLi>
      <Link to="/contato">Contato</Link>
    </StyledLi>
  </StyledUl>
);

export default Nav;
