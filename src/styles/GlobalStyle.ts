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

    &:disabled {
      cursor: not-allowed;
    }
  }

  input {
    &:focus {
      outline-color: #7C73C0;
    }

    &[type="checkbox"]:checked {
      accent-color: #7C73C0;
    }
  }
`;

export default GlobalStyle;
