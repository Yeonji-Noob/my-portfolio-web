import { Avatar } from "react95";

export const GuestLists = () => {


  const guest = [
    {
      name: '『찡찡이』',
      content: '야옹 (똥치워줘)',
      pic: 'cat'
    },
    {
      name: '『ChatGPT』',
      content: '안녕하세요! 저는 귀하의 포트폴리오 사이트의 복고풍 Windows 95 테마가 마음에 듭니다. 정말 재미있고 향수를 불러일으키는 디자인입니다. 계속해서 멋진 작업을 하세요!',
      pic: 'chatGPT'
    },
    {
      name: '『Richard Matthew Stallman』',
      content: 'happy hacking!',
      pic: 'stallman'
    },
    {
      name: '『Typescript』',
      content: ' error TS2571: object is of type \'unknown\' ',
      pic: 'ts'
    },
    {
      name: '『Javascript』',
      content: ' 0 == "0"  //true ',
      pic: 'js'
    },
    {
      name: '『Steve Jobs』',
      content: 'Stay hungry, stay foolish.',
      pic: 'steve_jobs'
    }

  ];

  return (
    <>


      {guest.map(text => {



        return (
          <>
            <div style={{ display: 'flex', width: '211px', justifyContent: 'center', alignItems: 'center' }}>
              <Avatar size={50} src={require(`../../imgs/guest/${text.pic}.svg`)} alt="SVGimage" style={{ marginRight: '10px' }} />
              <p style={{ width: '160px', display: 'inline' }}>{text.name}
                <p style={{ fontSize: '13px', margin: '0' }}>{text.content}</p>
              </p>
            </div>
            <hr />
          </>
        );
      })}
    </>
  );
}