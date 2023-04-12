import {useState} from "react";

import styled from "styled-components";
import icon2 from "../../imgs/icons/notepad.png";
import { NotepadWindow } from "./notepad_window";

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

export const Notepad = () => {


    const [showDiv, setShowDiv] = useState<boolean>(false)

    const IconClick = () => {
        setShowDiv(true);
    }


    return (
        <>
        <NotepadWindow showDiv={showDiv} setShowDiv={setShowDiv} ></NotepadWindow>
        <DivIconContainer onClick={IconClick} top="90px" left="10px" style={{ cursor: `url(https://cur.cursors-4u.net/cursors/cur-11/cur1046.cur), auto` }}>
            <Icon src={icon2} top="15px" left="10px">
            </Icon>
            <Icon1Label top="35px" left="2px">
                notepad
            </Icon1Label>
        </DivIconContainer>
        </>
    );
}