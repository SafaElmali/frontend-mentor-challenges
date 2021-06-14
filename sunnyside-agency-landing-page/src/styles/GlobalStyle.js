import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,600;1,600&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,600;1,600&family=Fraunces:ital,wght@0,700;0,900;1,700;1,900&display=swap');

  *,
  *::before,
  *::after{
    box-sizing:border-box
  }

 body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 18px;
  }
`;

export default GlobalStyle;
