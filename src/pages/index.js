import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

import MainApp from 'components/MainApp';

const App = () => (
  <div>
    <GlobalStyle />
    <Helmet>
      <meta charSet="utf-8" />
      <title>This is Me</title>
    </Helmet>
    <MainApp />
  </div>
);

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #2f3a56;
    color: #fff;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    margin: 0;
    padding: 0;
  }
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');
`;

export default App;
