import { ScrollView, Monitor } from "react95";
import styled from "styled-components";

import project1 from "../../imgs/project_img/soba.gif";
import project2 from "../../imgs/project_img/todolist.gif";
import project3 from "../../imgs/project_img/calc.gif";

import { GitHub30pixel } from "./index";

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

export const ProjectTab = () => {


  const project = [
    {
      title: <span>SORIBADA <br /> redesign project</span>,
      content: '첫 react 프로젝트입니다.',
      img: project1,
      href: 'https://github.com/Yeonji-Noob/Website_project2',
    },
    {
      title: <span>TO DO LIST</span>,
      content: <span>typescript로 만든 <br /> TO DO LIST 입니다.</span>,
      img: project2,
      href: 'https://github.com/Yeonji-Noob/todolist',
    },
    {
      title: <span>국비학원 출결계산기</span>,
      content: <span>react와 vite, <br /> MUI UI Components를 <br /> 사용한  출결계산기입니다.</span>,
      img: project3,
      href: 'https://github.com/Yeonji-Noob/Attendance-Calculator',
    },


  ];

  return (
    <ScrollView style={{ padding: '0.5rem', background: 'lightyellow', width: '430px', height: '310px' }}>


      {project.map((element) => {

        return (
          <div style={{ display: 'flex', margin: '30px 0' }}>
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

            </div>
          </div>
        );

      })}


    </ScrollView>
  );
}