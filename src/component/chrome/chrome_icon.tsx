import { useState } from "react";
import styled from "styled-components";
import icon1 from "../../imgs/icons/chrome.png";
import { ChromeWindow } from "./chrome_window";

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

export const ChromeIcon = () => {



    const [showDiv, setShowDiv] = useState<boolean>(false)

    const IconClick = () => {
        setShowDiv(true);
    }


    return (
        <>
            <ChromeWindow showDiv={showDiv} setShowDiv={setShowDiv} ></ChromeWindow>
            <DivIconContainer onClick={IconClick} top="5px" left="10px" style={{ cursor: `url(https://cur.cursors-4u.net/nature/nat-10/nat927.png), auto` }}>
                <Icon src={icon1} top="15px" left="14px">
                </Icon>
                <Icon1Label top="35px" left="6px">
                    chrome
                </Icon1Label>
            </DivIconContainer>
        </>
    );
}