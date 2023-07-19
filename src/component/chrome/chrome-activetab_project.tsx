import { ScrollView, Monitor } from "react95";
import styled from "styled-components";

import project1 from "../../imgs/project_img/soba.gif";
import project2 from "../../imgs/project_img/todolist.gif";
import project3 from "../../imgs/project_img/calc.gif";
import project4 from "../../imgs/project_img/galaga.gif";
import project5 from "../../imgs/project_img/demi95.gif";
import project6 from "../../imgs/project_img/mine.gif";


import { GitHub30pixel, Mobile, MobileNotSupported } from "./index";



export const ProjectTab = () => {


  const project = [
    {
      key: 0,
      title: <span>SORIBADA <br /> redesign project</span>,
      content: '첫 react 프로젝트입니다.',
      img: project1,
      href: 'https://github.com/Yeonji-Noob/Website_project2',
      ResponsiveWeb: < MobileNotSupported />
    },
    {
      key: 1,
      title: <span>TO DO LIST</span>,
      content: <span>typescript로 만든 <br /> TO DO LIST 입니다.</span>,
      img: project2,
      href: 'https://github.com/Yeonji-Noob/todolist',
      ResponsiveWeb: <Mobile />
    },
    {
      key: 2,
      title: <span>국비학원 출결계산기</span>,
      content: <span>react와 vite, <br /> MUI UI Components를 <br /> 사용한  출결계산기입니다.</span>,
      img: project3,
      href: 'https://github.com/Yeonji-Noob/Attendance-Calculator',
      ResponsiveWeb: <Mobile />
    },
    {
      key: 3,
      title: <span>Demi_game_galaga <br /> (v2.0.0)</span>,
      content: <span>vanilla javascript로 만든 <br /> galaga 게임입니다.</span>,
      img: project4,
      href: 'https://github.com/Yeonji-Noob/demi_game_galaga',
      ResponsiveWeb: <Mobile />
    },
    {
      key: 4,
      title: <span>Demi95.computer</span>,
      content: <span> Window95풍의 <br /> 개인 포트폴리오 사이트 </span>,
      img: project5,
      href: 'https://github.com/Yeonji-Noob/my-portfolio-web',
      ResponsiveWeb: <Mobile />
    },
    {
      key: 5,
      title: <span>Mine_sweeper</span>,
      content: <span> 9x9 사이즈의 <br /> 지뢰찾기 게임 입니다. </span>,
      img: project6,
      href: 'https://github.com/Yeonji-Noob/Mine_sweeper',
      ResponsiveWeb: <Mobile />
    },


  ];

  return (
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
      }}>


      {project.map((element) => {

        return (
          <ProjectFlexBox key={element.key}>
            <div>
              <Monitor backgroundStyles={{ backgroundImage: `url(${element.img})` }}></Monitor>
            </div>
            <div>

              <ProjectTitle>
                {element.title}
              </ProjectTitle>

              <ProjectContents>
                {element.content}
              </ProjectContents>

              <a href={element.href} target="_blank" rel="noreferrer" style={{ zIndex: '102' }}>
                <GitHub30pixel style={{ marginLeft: '10px', cursor: 'pointer' }}></GitHub30pixel>
              </a>

              <div style={{ display: 'inline-block', marginLeft: '5px' }}>
                {element.ResponsiveWeb}
              </div>



            </div>
          </ProjectFlexBox>
        );

      })}


    </ScrollView>
  );
}


const ProjectTitle = styled.p`

width: 165px; 
word-break: break-all; 
margin: 0 10px; 
font-weight: 600;

`;

const ProjectContents = styled.p`

width: 165px; 
word-break: break-all; 
margin: 10px 10px; 
font-size: 14px;
font-family: 'NeoDungGeunMo';

`;

const ProjectFlexBox = styled.div`

display: flex; 
margin: 30px;
justify-content: space-around;

@media (max-width: 620px) {
  position: relative;
  flex-direction: column;
  & div {
    margin: 0 auto;
  }
}

@media (max-width: 350px) {
  margin: 30px 0;
  justify-items: start;
}

`;