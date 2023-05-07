import { createGlobalStyle } from 'styled-components';
import NeoDunggeunmo from '../font/NeoDunggeunmoPro-Regular.woff2';
import Dunggeunmo from '../font/DungGeunMo.woff2';

export const GlobalFont = createGlobalStyle`
 

 @font-face {
    font-family: 'NeoDungGeunMo';
    src: url('${NeoDunggeunmo}') format('woff2');
  }

  @font-face {
    font-family: 'DungGeunMo';
    src: url('${Dunggeunmo}') format('woff2');
  }

`;
