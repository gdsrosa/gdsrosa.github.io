import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  GithubLogo,
  JestLogo,
  JSLogo,
  LinkedinLogo,
  Profile,
  ReactLogo,
  ReduxLogo,
  SCLogo,
} from 'static/images';
import {
  StyledDescription,
  StyledImg,
  StyledApp,
  StyledProfileImg,
  StyledSocials,
  StyledSocialsImg,
  StyledTechnologies,
  Technologies,
} from 'styles';

import LightTheme from '../themes/light';

const App = () => (
  <ThemeProvider theme={LightTheme}>
    <StyledApp>
      <section>
        <StyledProfileImg src={Profile} alt="Profile Picture" />
        <StyledDescription>
          Working with Front End technologies since 2016.
        </StyledDescription>
      </section>
      <section>
        <h2>Front End Enginner</h2>
        <StyledSocials>
          <a href="https://www.linkedin.com/in/gabriel-rosa-dev/">
            <StyledSocialsImg src={LinkedinLogo} />
          </a>
          <a href="https://github.com/gdsrosa">
            <StyledSocialsImg src={GithubLogo} />
          </a>
        </StyledSocials>
        <StyledTechnologies>
          <h2>Main Stack</h2>
          <Technologies>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <StyledImg src={JSLogo} alt="Javascript Language Logo" />
            </a>
            <a href="https://reactjs.org/">
              <StyledImg src={ReactLogo} alt="React Logo" />
            </a>
            <a href="https://redux.js.org/">
              <StyledImg src={ReduxLogo} alt="Redux Logo" />
            </a>
            <a href="https://www.styled-components.com/">
              <StyledImg src={SCLogo} alt="Styled Components Logo" />
            </a>
            <a href="https://jestjs.io/">
              <StyledImg src={JestLogo} alt="Jest Logo" />
            </a>
          </Technologies>
        </StyledTechnologies>
        <button type="button" onClick={() => {}}>
          change color
        </button>
      </section>
    </StyledApp>
  </ThemeProvider>
);

export default App;
