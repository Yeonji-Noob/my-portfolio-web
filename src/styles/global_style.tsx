import { createGlobalStyle } from "styled-components";

// resetCSS랑 같은 역할
export const GlobalStyle = createGlobalStyle`
  
  * {
    box-sizing: border-box;
  }


  body {
    line-height: 1.5;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    overflow:hidden;
    font-family: 'DungGeunMo';
  }


  input, textarea { 
  -webkit-user-select : auto;
  }

`;
