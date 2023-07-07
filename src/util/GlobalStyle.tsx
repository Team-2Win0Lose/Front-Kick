import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  

  body{
    margin:0;
    padding:0;
  }

  @media only screen and (min-width: 768px) {
  body {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 50px;
  }
}
`;

export default GlobalStyle;
