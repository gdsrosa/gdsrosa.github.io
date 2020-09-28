import React from 'react';
import { Helmet } from 'react-helmet';

import GlobalStyle from 'styles/global';
import Home from './_main';

export default () => (
  <div>
    <GlobalStyle />
    <Helmet>
      <meta charSet="utf-8" />
      <title>Me</title>
    </Helmet>
    <Home />
  </div>
);
