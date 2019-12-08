import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

import App from 'components/App';

export default () => (
  <div>
    <GlobalStyle />
    <Helmet>
      <meta charSet="utf-8" />
      <title>This is Me</title>
    </Helmet>
    <App />
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
