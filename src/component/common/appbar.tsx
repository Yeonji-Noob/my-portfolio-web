import { AppBar, Toolbar, Button, Frame, MenuList, MenuListItem, Separator, Handle } from "react95";
import styled from "styled-components";
import { CurrentTime } from "./appbar-time";
import { useState } from "react";


import BarStartImg from "../../imgs/bar/bar-win_start.png";


const FrameContainer = styled.div`
position: absolute;
width : 100%;
height: 100%;

`;


const Bar = () => {


  const [isOpen, setOpen] = useState(false);

  return (
    //top: 'none' 하면 안먹고  'auto' 하니까 먹음 ㅋㅋ
    <AppBar style={{ position: 'fixed', width: '100%', height: '50px', zIndex: '100', top: 'auto', bottom: '0' }}>
      <Toolbar>
        <div style={{ display: 'flex', position: 'relative', width: '100%', height: '50px' }}>

          <Button onClick={() => setOpen(!isOpen)} active={isOpen}
            style={{ position: 'fixed', zIndex: '100', fontWeight: 'bold', marginTop: '0px' }}>
            <img src={BarStartImg} alt="start-img" style={{ height: '20px', marginRight: '4px' }} />
            Start
          </Button>

          <Handle size={38} style={{ position: 'absolute', left: '90px' }} />

          <MenuListItem style={{ position: 'absolute', left: '95px' }} >
            <span role='img' aria-label='👨‍💻' >
              👨‍💻
            </span>
          </MenuListItem>

          {isOpen && (
            <MenuList
              style={{
                position: 'absolute',
                top: '-210px',
                left: '-2px',
                zIndex: '200'

              }}
              onClick={() => setOpen(false)}
            >
              <MenuListItem >
                <span role='img' aria-label='👨‍💻' >
                  👨‍💻
                </span>
                heeeeey
              </MenuListItem>

              <MenuListItem >
                <span role='img' aria-label='👨‍💻' >
                  👨‍💻
                </span>
                heeeeey
              </MenuListItem>

              <MenuListItem>
                <span role='img' aria-label='📁'>
                  📁
                </span>
                My account
              </MenuListItem>
              <Separator />
              <MenuListItem disabled>
                <span role='img' aria-label='🔙'>
                  🔙
                </span>
                Logout
              </MenuListItem>
            </MenuList>
          )}

          <FrameContainer>
            <Frame variant="well" style={{ position: 'absolute', height: '35px', width: '78px', right: '2px' }}>
              <CurrentTime />
            </Frame>
          </FrameContainer>
        </div>
      </Toolbar>
    </AppBar>


  );

}

export default Bar;