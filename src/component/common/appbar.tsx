import { AppBar, Toolbar, Button, Frame } from "react95";
import styled from "styled-components";
import { CurrentTime } from "./appbar-time";

import BarStartImg from "../../imgs/bar/bar-win_start.png";



const FrameContainer = styled.div`
position: absolute;
width : 100%;
height: 100%;

`;


const Bar = () => {

  return (

      <AppBar style={{ position: 'fixed', width: '100%', height: '50px', zIndex:'100', top: 'none', bottom: '0'}}>
        <Toolbar style={{}}>
          <div style={{ display: 'flex', position: 'relative', width: '100%', height: '50px'}}>

            <Button style={{ fontWeight: 'bold' ,marginTop: '7px' }}>
              <img src={BarStartImg} alt="start-img" style={{ height: '20px', marginRight: '4px' }} />
              Start
            </Button>

            <FrameContainer>
              <Frame variant="well" style={{ position: 'absolute', top: '7px', height: '35px', width: '85px', right: '2px' }}>
                <CurrentTime />
              </Frame>
            </FrameContainer>
          </div>
        </Toolbar>
      </AppBar>


  );

}

export default Bar;