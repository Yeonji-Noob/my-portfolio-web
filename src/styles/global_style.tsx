import { createGlobalStyle } from "styled-components";
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';


// resetCSS랑 같은 역할
const GlobalStyle = createGlobalStyle`
  
  * {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }


  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    overflow:hidden;
  }

  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

export default GlobalStyle;