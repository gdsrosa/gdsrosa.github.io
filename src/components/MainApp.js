import React from 'react';

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
  StyledContent,
  StyledDescription,
  StyledHobbies,
  StyledImg,
  StyledMainApp,
  StyledParagraph,
  StyledProfileContainer,
  StyledProfileImg,
  StyledSocials,
  StyledSocialsImg,
  StyledTechnologies,
  Technologies,
} from 'styles';
import Emoji from 'components/Emoji';
import Anchor from 'components/Anchor';

const MainApp = () => (
  <StyledMainApp>
    <StyledProfileContainer>
      <StyledProfileImg src={Profile} alt="Profile Picture" />
      <StyledDescription>
        Working with Front End technologies since 2016.
      </StyledDescription>
      <StyledParagraph>
        <Emoji ariaLabel="Brazilian Flag" emoji="🇧🇷" label="Brazilian" />
      </StyledParagraph>
      <StyledParagraph>
        <Emoji ariaLabel="American Football" emoji="🏈" label="NFL Fan" />
      </StyledParagraph>
    </StyledProfileContainer>
    <StyledContent>
      <h2>Front End Enginner</h2>
      <StyledSocials>
        <Anchor href="https://www.linkedin.com/in/gabriel-rosa-dev/">
          <StyledSocialsImg src={LinkedinLogo} />
        </Anchor>
        <Anchor href="https://github.com/gdsrosa">
          <StyledSocialsImg src={GithubLogo} />
        </Anchor>
      </StyledSocials>
      <StyledHobbies>
        <h2>Hobbies</h2>
        <StyledParagraph>
          <Emoji
            ariaLabel="Beer Mug"
            emoji="🍺"
            label="Drink Handcrafted Beers"
          />
        </StyledParagraph>
        <StyledParagraph>
          {' '}
          <Emoji ariaLabel="Developer" emoji="👨🏻‍💻" label="Code" />
        </StyledParagraph>
        <StyledParagraph>
          {' '}
          <Emoji ariaLabel="Soccer Ball" emoji="⚽" label="Play Soccer" />
        </StyledParagraph>
        <StyledParagraph>
          {' '}
          <Emoji ariaLabel="Man Swimming" emoji="🏊‍♂️" label="Swim" />
        </StyledParagraph>
      </StyledHobbies>
      <StyledTechnologies>
        <h2>Main Stack</h2>
        <Technologies>
          <Anchor href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            <StyledImg src={JSLogo} alt="Javascript Language Logo" />
          </Anchor>
          <Anchor href="https://reactjs.org/">
            <StyledImg src={ReactLogo} alt="React Logo" />
          </Anchor>
          <Anchor href="https://redux.js.org/">
            <StyledImg src={ReduxLogo} alt="Redux Logo" />
          </Anchor>
          <Anchor href="https://www.styled-components.com/">
            <StyledImg src={SCLogo} alt="Styled Components Logo" />
          </Anchor>
          <Anchor href="https://jestjs.io/">
            <StyledImg src={JestLogo} alt="Jest Logo" />
          </Anchor>
        </Technologies>
      </StyledTechnologies>
    </StyledContent>
  </StyledMainApp>
);

export default MainApp;
