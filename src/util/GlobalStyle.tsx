import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    width: 393px;
    min-height: 852px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
