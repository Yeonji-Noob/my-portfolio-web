import { GroupBox, ScrollView } from "react95";
// import styled from "styled-components";
import aboutImg from "../../imgs/about_image.jpg";


export const AboutTab = () => {


  const badgeInfo = [
    {
      key: 0,
      name: 'HTML5',
      color: 'E34F26',
      logoColor: 'white'
    },
    {
      key: 1,
      name: 'CSS3',
      color: '1572B6',
      logoColor: 'white'
    },
    {
      key: 2,
      name: 'Javascript',
      color: 'black',
      logoColor: 'F7DF1E'
    },
    {
      key: 3,
      name: 'JQuery',
      color: 'lightgray',
      logoColor: '0769AD'
    },
    {
      key: 4,
      name: 'Vue.js',
      color: '4FC08D',
      logoColor: 'white'
    },
    {
      key: 5,
      name: 'React',
      color: 'white',
      logoColor: '61DAFB'
    },
    {
      key: 6,
      name: 'typescript',
      color: '3178C6',
      logoColor: 'white'
    },
    {
      key: 7,
      name: 'SASS',
      color: 'CC6699',
      logoColor: 'white'
    },
    {
      key: 8,
      name: 'styledcomponents',
      color: 'DB7093',
      logoColor: 'white'
    },
    {
      key: 9,
      name: 'python',
      color: '3776AB',
      logoColor: 'white'
    },
  ];


  return (
    <>
      <ScrollView
        style={{
          background: 'lightyellow',
          margin: '0px',

          minWidth: '235px',
          width: '75vw',
          maxWidth: '643px',

          height: '64vw',
          minHeight: '260px',
          maxHeight: '525px'
        }}
      >
        <GroupBox label='about me' variant='flat' style={{ margin: '20px' }}>
          <div style={{ padding: '0.5em 0 0.5em 0' }}>
            <img src={aboutImg} alt="my_picture" style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)' }} />
            <p style={{ textAlign: 'center' }}>
              Son Yeon-ji
            </p>
            <p style={{ fontSize: '14px', fontFamily: 'NeoDungGeunMo' }}>프론트엔드 웹 개발자를 목표로 <br />공부하고 있습니다.
              <br />호기심이 많아서 이것저것 새로운 것을 해보고 도전하는 것을 즐깁니다.</p>
            <p style={{ fontSize: '16px', fontWeight: '600', fontFamily: 'NeoDungGeunMo' }}>🌼🌼 Study 🌼🌼</p>

            {badgeInfo.map(badge => <img key={badge.key} src={`https://img.shields.io/badge/${badge.name}-${badge.color}?style=for-the-badge&logo=${badge.name}&logoColor=${badge.logoColor}`} alt="badge" />)}

          </div>
        </GroupBox>
        <br />
        <GroupBox label='contact' variant='flat' style={{ margin: '20px' }}>
          <div style={{ padding: '0.5em 0 0.5em 0' }}>
            <span>
              링크들
            </span>
          </div>
        </GroupBox>
      </ScrollView >
    </>
  );

}