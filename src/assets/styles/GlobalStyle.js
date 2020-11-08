import { createGlobalStyle } from 'styled-components';
import { theme } from 'assets/styles/theme';
import 'vendors/normalize.css';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${theme.font.family};
    margin: 0;
    font-size: ${theme.font.size.mobile.normal};
    color: ${theme.colors.white}
  }

  h1, h2, h3, h4, h5, span {
    margin: 0;
  }

  button {
    padding: 0;
    cursor: pointer;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
