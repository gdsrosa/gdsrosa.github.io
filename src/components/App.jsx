import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Section from './Section';
import Footer from './Footer';

const StyledApp = styled.body`
  margin: 0;
  padding: 0;
  font-family: 'Menlo';
  text-decoration: none;
`;

const App = () => (
  <StyledApp>
    <Header />
    <Section />
    <Footer />
  </StyledApp>
);

export default App;
