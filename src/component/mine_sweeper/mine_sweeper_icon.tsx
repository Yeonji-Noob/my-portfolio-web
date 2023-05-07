import { useState } from "react";
import styled from "styled-components";
import icon3 from "../../imgs/icons/mine_sweeper.png";
import { MineWindow } from "./mine_sweeper_window";


interface DivProps {
  top: string;
  left: string;
}

const DivIconContainer = styled.div<DivProps>`

position: absolute; 
top: ${props => props.top};
left: ${props => props.left};
width: 60px;
height: 75px;

`;


//////////////////////////////////////////////
//////////////////////////////////////////////


interface ImgProps {
  top: string;
  left: string;
}

const Icon = styled.img<ImgProps>`

position: absolute;
width: 32px;
height: 32px;
left: ${props => props.left};
top: ${props => props.top};
`;

//////////////////////////////////////////////
//////////////////////////////////////////////

interface TopLeftProps {
  top: string;
  left: string;
}


const Icon1Label = styled.p<TopLeftProps>`
display: inline-block;
position: absolute;
top: ${props => props.top};
left: ${props => props.left};
line-height: 15px;
cursor: 'pointer';

  &:hover {
      border: 0.5px white dashed;
      background-color: #0000ffda;
      color: white;
  }

`;



export const MineSweeper = () => {


  const [showDiv, setShowDiv] = useState<boolean>(false)

  const IconClick = () => {
    setShowDiv(true);
  }

  return (
    <>
      <MineWindow showDiv={showDiv} setShowDiv={setShowDiv} ></MineWindow>
      <DivIconContainer onClick={IconClick} top="170px" left="10px">
        <Icon src={icon3} top="15px" left="13px">
        </Icon>
        <Icon1Label top="35px" left="5px">
          mine_
          sweeper
        </Icon1Label>
      </DivIconContainer>
    </>
  );
}