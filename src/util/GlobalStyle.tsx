import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  /* html {
    width: 393px;
    min-height: 852px;
    margin: 0 auto;
  } */

  body{
    background-color: #FFFFFF;
  }

  @media only screen and (min-width: 1200px) {
  body {
    background-color: #000000;
  }
}


`;

export default GlobalStyle;
