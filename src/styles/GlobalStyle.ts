import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    outline: none;
    border: none;
    padding: 0;
    background: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
