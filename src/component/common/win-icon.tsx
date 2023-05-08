import styled from "styled-components";
import { StyledComponent } from "styled-components";

import { Hamster, GuestBook, Gallery } from "./index";


import { Notepad } from "../notepad/notepad-icon";
import { ChromeIcon } from "../chrome/chrome-icon";
import { MineSweeper } from "../mine_sweeper/mine_sweeper_icon";

// import { VideoBg2 } from "../../containers/bg"

// import { useState } from "react";

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

export interface ComponentsProps {

    DivIconContainer: StyledComponent<"div", any, DivProps, never>;
    Icon: StyledComponent<"img", any, ImgProps, never>;
    Icon1Label: StyledComponent<"p", any, TopLeftProps, never>;

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

    // const [showDiv, setShowDiv] = useState<boolean>(false)

    // const IconClick = () => {
    //     setShowDiv(true);
    // }


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