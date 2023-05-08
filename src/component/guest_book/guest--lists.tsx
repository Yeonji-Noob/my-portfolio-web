import { Avatar } from "react95";

export const GuestLists = () => {


  const guest = [
    {
      key: 0,
      name: '『찡찡이』',
      content: '야옹 (똥치워줘)',
      pic: 'cat'
    },
    {
      key: 1,
      name: '『ChatGPT』',
      content: '안녕하세요! 저는 귀하의 포트폴리오 사이트의 복고풍 Windows 95 테마가 마음에 듭니다. 정말 재미있고 향수를 불러일으키는 디자인입니다. 계속해서 멋진 작업을 하세요!',
      pic: 'chatGPT'
    },
    {
      key: 2,
      name: '『Richard Matthew Stallman』',
      content: 'happy hacking!',
      pic: 'stallman'
    },
    {
      key: 3,
      name: '『Typescript』',
      content: ' error TS2571: object is of type \'unknown\' ',
      pic: 'ts'
    },
    {
      key: 4,
      name: '『Javascript』',
      content: ' 0 == "0"  //true ',
      pic: 'js'
    },
    {
      key: 5,
      name: '『Steve Jobs』',
      content: 'Stay hungry, stay foolish.',
      pic: 'steve_jobs'
    }

  ];

  return (
    <>


      {guest.map(text => {



        return (
          <div key={text.key}>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', }}>
              <Avatar size={50} src={require(`../../imgs/guest/${text.pic}.svg`)} alt="SVGimage" style={{ marginRight: '10px', flexShrink: '0' }} />
              <p style={{ minWidth: '160px', width: '20vw', display: 'inline' }}>{text.name}
                <br />
                <span style={{ fontSize: '13px' }}>{text.content}</span>
              </p>
            </div>
            <hr />
          </div>
        );
      })}

    </>
  );
}