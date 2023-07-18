import styled from "styled-components";

import { Hamster, GuestBook, Gallery } from "./index";

import { DivProps, ImgProps, TopLeftProps } from "../interface"

import { Notepad } from "../notepad/notepad-icon";
import { ChromeIcon } from "../chrome/chrome-icon";
import { MineSweeper } from "../mine_sweeper/mine_sweeper_icon";



const WinIcon: React.FC = () => {


    return (
        <>

            <ChromeIcon DivIconContainer={DivIconContainer} Icon={Icon} Icon1Label={Icon1Label} />

            <Notepad DivIconContainer={DivIconContainer} Icon={Icon} Icon1Label={Icon1Label} />

            <MineSweeper DivIconContainer={DivIconContainer} Icon={Icon} Icon1Label={Icon1Label} />

            <Hamster DivIconContainer={DivIconContainer} Icon={Icon} Icon1Label={Icon1Label} />

            <GuestBook DivIconContainer={DivIconContainer} Icon={Icon} Icon1Label={Icon1Label} />

            <Gallery DivIconContainer={DivIconContainer} Icon={Icon} Icon1Label={Icon1Label} />

        </>

    );

}

export default WinIcon;



//styled-components

// 나 : 우왕 중복되는 태그는 하나만 만들어도 되네 ~~~! 짱짱이당
// TS : 응 Props 넘겨줄때 타입지정해라 ㅅㄱ
// 나: 아


const DivIconContainer = styled.div<DivProps>`

position: absolute; 
top: ${props => props.top};
left: ${props => props.left};
width: 60px;
height: 75px;

`;


//////////////////////////////////////////////
//////////////////////////////////////////////



const Icon = styled.img<ImgProps>`

position: absolute;
width: 32px;
height: 32px;
left: ${props => props.left};
top: ${props => props.top};
`;

//////////////////////////////////////////////
//////////////////////////////////////////////

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