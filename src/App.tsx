import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global_style"
import BackGround from "./containers/bg";
import Bar from "./component/common/appbar";
import WinIcon from "./component/common/win_icon";
import BgPattern from "./containers/bg_pattern";
// import Windows from "./containers/windows";


import Marine from 'react95/dist/themes/marine';

function App() {


  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Marine}>
        <WinIcon />
        <BackGround />
        <Bar />
      </ThemeProvider>
      <BgPattern />
    </>
  );
}

export default App;
