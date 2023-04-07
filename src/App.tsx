import { createGlobalStyle, ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global_style"
import BackGround from "./component/bg";
import Bar from "./component/common/appbar";
import WinIcon from "./component/common/win_icon";

import Marine from 'react95/dist/themes/marine';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Marine}>
        <WinIcon/>
        <BackGround />
        <Bar />
      </ThemeProvider>
    </>
  );
}

export default App;
