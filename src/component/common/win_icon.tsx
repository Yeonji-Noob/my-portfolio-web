import styled from "styled-components";
import icon4 from "../../imgs/icons/hamster_icon.png";
import icon5 from "../../imgs/icons/guest_book.png";
import { GuestBook } from "../guest_book/guest_window";
import { Notepad } from "../notepad/notepad_icon";
import { ChromeIcon } from "../chrome/chrome_icon";
import { MineSweeper } from "../mine_sweeper/mine_sweeper_icon";

// import { VideoBg2 } from "../../containers/bg"

import { useState } from "react";

// 나 : 우왕 중복되는 태그는 하나만 만들어도 되네 ~~~! 짱짱이당
// TS : 응 Props 넘겨줄때 타입지정해라 ㅅㄱ
// 나: 아

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

//////////////////////////////////////////////
//////////////////////////////////////////////


const WinIcon: React.FC = () => {

    const [showDiv, setShowDiv] = useState<boolean>(false)

    const IconClick = () => {
        setShowDiv(true);
    }


    return (
        <>
            {/* <DivIconContainer top="5px" left="10px" style={{ cursor: `url(https://cur.cursors-4u.net/nature/nat-10/nat927.png), auto` }}>
                <Icon src={icon1} top="15px" left="14px">
                </Icon>
                <Icon1Label top="35px" left="6px">
                    chrome
                </Icon1Label>
            </DivIconContainer> */}
            <ChromeIcon></ChromeIcon>

            <Notepad></Notepad>

            <MineSweeper></MineSweeper>


            <DivIconContainer top="260px" left="10px" style={{ cursor: `url(https://cur.cursors-4u.net/nature/nat-1/nat21.png), auto` }}>
                <Icon src={icon4} top="15px" left="13px">
                </Icon>
                <Icon1Label top="35px" left="3px">
                    hamster
                </Icon1Label>
            </DivIconContainer>

            <GuestBook showDiv={showDiv} setShowDiv={setShowDiv} />

            <DivIconContainer onClick={IconClick} top="14px" left="86px">
                <Icon src={icon5} top="8px" left="14px">
                </Icon>
                <Icon1Label top="26px" left="6px">
                    guest_
                    book
                </Icon1Label>
            </DivIconContainer>




        </>

    );

}

export default WinIcon; 