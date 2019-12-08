import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';

const StyledHeader = styled.div`
  min-height: 100px;
  background-color: #44475a;
  width: 100%;
  color: #fff;
`;

const Header = () => (
  <StyledHeader>
    <Nav />
  </StyledHeader>
);

export default Header;
