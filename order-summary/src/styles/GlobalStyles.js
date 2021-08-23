import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;   
  }

  body {
    font-family: ${({ theme }) => theme.typography.redHatDisplay},sans-serif;
    margin: 0;
    padding: 0;
    height: 100vh;
    width:100%;
  }
`;

export default GlobalStyle;
