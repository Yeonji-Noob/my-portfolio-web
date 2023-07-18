import { useState } from "react";
import { AppBar, Toolbar, Button, Frame, MenuList, MenuListItem, Separator, Handle } from "react95";
import styled from "styled-components";

import Welcome from "../welcome/welcome_window";
import { AppButtons, CurrentTime, GitHub, KakaoTalk, Toss, Mail, WelcomeIcon } from ".";

import BarStartImg from "../../imgs/bar/bar-win_start.png";






const Bar: React.FC = () => {


  const [isOpen, setOpen] = useState<boolean>(false);

  const [showDiv, setShowDiv] = useState<boolean>(false)

  const IconClick = () => {
    setShowDiv(false);
  }

  const handleClick = (link: string) => {
    window.open(link, '_blank');
  }

  const appBarInfo = [

    {
      key: 0,
      name: 'welcome!',
      svg: <WelcomeIcon />,
      link: IconClick
    },
    {
      key: 1,
      name: 'mail',
      svg: <Mail />,
      link: () => handleClick('mailto:rhcp3885@gmail.com')
    },
    {
      key: 2,
      name: 'gitHub',
      svg: <GitHub className='github-icon' />,
      link: () => handleClick('https://github.com/Yeonji-Noob')
    },
    {
      key: 3,
      name: 'kakaoTalk',
      svg: <KakaoTalk />,
      link: () => handleClick('https://open.kakao.com/me/demi_iii')
    },
    {
      key: 4,
      name: 'toss',
      svg: <Toss />,
      link: () => handleClick('https://toss.me/deminoob')
    }

  ];


  return (
    <>
      <Welcome showDiv={showDiv} setShowDiv={setShowDiv} />

      {/* //top: 'none' 하면 안먹고  'auto' 하니까 먹음 ㅋㅋ */}
      <AppBar style={{ position: 'fixed', width: '100%', height: '50px', zIndex: '100', top: 'auto', bottom: '0' }}>
        <Toolbar>
          <div style={{ display: 'flex', position: 'relative', width: '100%', height: '50px' }}>

            <Button onClick={() => setOpen(!isOpen)} onTouchStart={() => setOpen(!isOpen)}
              active={isOpen}
              style={{ position: 'fixed', zIndex: '100', fontWeight: 'bold', marginTop: '0px' }}>
              <img src={BarStartImg} alt="start-img" style={{ height: '20px', marginRight: '4px' }} />
              Start
            </Button>

            <Handle size={38} style={{ position: 'absolute', left: '90px' }} />


            {isOpen && (
              <MenuList
                style={{
                  position: 'absolute',
                  top: '-300px',
                  left: '-2px',
                  zIndex: '200',
                  width: '140px',
                }}
                onClick={() => setOpen(false)}
              >

                {appBarInfo.map(info => {
                  return (
                    <StartMenuContainer key={info.key}>
                      <MenuListItem onClick={info.link}>
                        <span role='img' aria-label='Icon' style={{ lineHeight: '0' }} >
                          {info.svg}
                        </span>
                        {info.name}
                      </MenuListItem>
                    </StartMenuContainer>

                  );
                })}

                <Separator />

                <MenuListItem disabled>
                  <span role='img' aria-label='🔙'>
                    🔙
                  </span>
                  Logout
                </MenuListItem>


              </MenuList>
            )}

            {/* 하단 작은 버튼들 */}
            <AppButtons />

            <FrameContainer>
              <Frame variant="well" style={{ position: 'absolute', height: '35px', width: '78px', right: '2px' }}>
                <CurrentTime />
              </Frame>
            </FrameContainer>

          </div>
        </Toolbar>
      </AppBar >
    </>



  );

}

export default Bar;


//styled-components

const FrameContainer = styled.div`
position: absolute;
width : 100%;
height: 100%;

`;

const StartMenuContainer = styled.div`

  & .kbwcaa:hover {
    background: #ff558e;
    cursor: pointer;
  }

`;