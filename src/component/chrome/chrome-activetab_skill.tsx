import { ScrollView, GroupBox } from "react95";

export const SkillTab = () => {
  return (
    <>
      <ScrollView
        style={{ padding: '1rem', background: 'lightyellow', width: '81vw', maxWidth: '630px', height: '70vw', minHeight: '310px', maxHeight: '500px' }}
      >
        <GroupBox variant='flat' label='Summary' style={{ fontSize: '13px' }}>
          <li style={{ listStyleType: 'disc' }}>타입스크립트를 활용한 프로젝트 경험</li>
          <li style={{ listStyleType: 'disc' }}>다양한 라이브러리를 이용할 수 있습니다.</li>
          <li style={{ listStyleType: 'disc' }}>함수형 컴포넌트에 익숙합니다.</li>
        </GroupBox>
        <br />
        HTML5
        <br />
        CSS3
        <br />
        Javascript
        <br />
        Typescript
        <br />
        React.js
        <br />
        SCSS
        <br />
        Styled-components
        <br />
        Github
        <br />
        <br />
        <GroupBox variant='flat' label='Tools'>
          Adobe Photoshop
          <br />
          Adobe Illustrator
          <br />
          Canva
          <br />
          Clip studio
          <br />
          Figma
          {/* <span role='img' aria-label='😍'>
            😍
          </span> */}
        </GroupBox>
        <br />
        <GroupBox variant='flat' label='Hobby' disabled>
          Python
          {/* <span role='img' aria-label='😍'>
            😍
          </span> */}
        </GroupBox>
        <br />
      </ScrollView>
    </>
  );
}