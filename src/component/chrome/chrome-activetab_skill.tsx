import { ScrollView, GroupBox } from "react95";

export const SkillTab = () => {
  return (
    <>
      <ScrollView
        style={{
          background: 'lightyellow',
          margin: '0px',

          minWidth: '235px',
          width: '77vw',
          maxWidth: '643px',

          height: '64vw',
          minHeight: '260px',
          maxHeight: '525px'
        }}
      >
        <GroupBox variant='flat' label='Summary' style={{ fontSize: '13px', margin: '20px' }}>
          <li style={{ listStyleType: 'disc' }}>타입스크립트를 좋아해요</li>
          <li style={{ listStyleType: 'disc' }}>다양한 라이브러리를 이용합니다.</li>
          <li style={{ listStyleType: 'disc' }}>리액트 함수형 컴포넌트에 익숙합니다.</li>
          <li style={{ listStyleType: 'disc' }}>계속 새로운 툴을 써보고 있습니다.</li>
        </GroupBox>
        <GroupBox variant='flat' label='Tools' style={{ margin: '20px' }}>
          Adobe Photoshop
          <br />
          Adobe Illustrator
          <br />
          Canva
          <br />
          Clip studio
          <br />
          Figma
          <br />
          VScode
        </GroupBox>
        <GroupBox variant='flat' label='Hobby' disabled style={{ margin: '20px' }}>
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