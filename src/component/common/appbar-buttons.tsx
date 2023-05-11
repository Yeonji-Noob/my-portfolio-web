import styled from "styled-components";
import { Button } from "react95";
import { GitHub, KakaoTalk, Toss, Mail } from ".";


const ButtonDivContainer = styled.div`

  display: flex;

  & .appbar-mail-button {

    display: flax; 
    z-index: 101;
    padding: 0; 
    margin-left: 100px;

    @media (max-width: 320px) {
      display: none;
    }
  }

`;


const ButtonDiv = styled.div`

    display: flex;
    position: relative;

  & .appbar-icon-buttons {

    @media (max-width: 320px) {
      display: none;
    }

  }

`;


export const AppButtons = () => {





  const buttons = [
    {
      key: 0,
      icon: GitHub,
      href: 'https://github.com/Yeonji-Noob'
    },
    {
      key: 1,
      icon: KakaoTalk,
      href: 'https://open.kakao.com/me/demi_iii'
    },
    {
      key: 2,
      icon: Toss,
      href: 'https://toss.me/deminoob'
    },
  ];

  return (
    <ButtonDivContainer>

      <Button className="appbar-mail-button" variant="thin" >
        <a href="mailto:rhcp3885@gmail.com" target="_blank" rel="noreferrer" style={{ zIndex: '102' }} aria-label="mail">
          < Mail />
        </a>
      </Button>


      {buttons.map(name => {

        const Icon = name.icon

        return (
          <div key={name.key}>
            <ButtonDiv>
              <Button className="appbar-icon-buttons" variant="thin"
                style={{
                  display: 'flax',
                  zIndex: '101',
                  padding: '0 5px'
                }}>
                <a href={name.href} target="_blank" rel="noreferrer" style={{ zIndex: '102' }} aria-label="link">
                  < Icon />
                </a>
              </Button>
            </ButtonDiv>
          </div>
        );
      })}



    </ButtonDivContainer>
  );
}