import { GroupBox, ScrollView } from "react95";
// import styled from "styled-components";
import aboutImg from "../../imgs/about_image.jpg";


export const AboutTab = () => {

  return (
    <>
      <ScrollView
        style={{ padding: '1rem', background: 'lightyellow', width: '420px', height: '310px' }}
      >
        <GroupBox label='about me' variant='flat'>
          <div style={{ padding: '0.5em 0 0.5em 0' }}>
            <img src={aboutImg} alt="my_picture" style={{ position: 'relative', left: '10%' }} />
            <p style={{ textAlign: 'center' }}>
              Son Yeon-ji
            </p>
            <p style={{ fontSize: '14px', fontFamily: 'NeoDungGeunMo' }}>프론트엔드 웹 개발자를 목표로 공부하고 있습니다.</p>
          </div>
        </GroupBox>
        <br />
        <GroupBox label='contact' variant='flat'>
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