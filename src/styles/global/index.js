import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    // background-color: #2f3a56;
    background-color: ${props => props.theme.colors.background};
    // color: #fff;
    color: ${props => props.theme.colors.textColor};
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    margin: 0;
    padding: 0;
  }
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap');
`;

export default GlobalStyle;
