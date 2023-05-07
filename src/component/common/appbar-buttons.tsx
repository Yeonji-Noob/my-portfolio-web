import { Button } from "react95";
import { GitHub, KakaoTalk, Toss, Mail } from ".";

export const AppButtons = () => {


  const buttons = [
    {
      icon: GitHub,
      href: 'https://github.com/Yeonji-Noob'
    },
    {
      icon: KakaoTalk,
      href: 'https://open.kakao.com/me/demi_iii'
    },
    {
      icon: Toss,
      href: 'https://toss.me/deminoob'
    },
  ];

  return (
    <>

      <Button variant="thin" style={{
        display: 'flax', zIndex: '101', padding: '0', marginLeft: '100px'
      }}>
        <a href="mailto:rhcp3885@gmail.com" target="_blank" rel="noreferrer" style={{ zIndex: '102' }}>
          < Mail />
        </a>
      </Button>


      {buttons.map(name => {

        const Icon = name.icon

        return (
          <>
            <Button variant="thin" style={{
              display: 'flax', zIndex: '101', padding: '0 5px'
            }}>
              <a href={name.href} target="_blank" rel="noreferrer" style={{ zIndex: '102' }}>
                < Icon />
              </a>
            </Button>
          </>
        );
      })}



    </>
  );
}