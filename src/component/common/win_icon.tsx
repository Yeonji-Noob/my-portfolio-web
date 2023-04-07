import styled from "styled-components";
import icon1 from "../../imgs/icons/chrome.png"
import icon2 from "../../imgs/icons/notepad.png"
import icon3 from "../../imgs/icons/coffee.png"
import icon4 from "../../imgs/icons/hamster_icon.png"


// 나 : 우왕 중복되는 태그는 하나만 만들어도 되네 ~~~! 짱짱이당
// TS : 응 Props 넘겨줄때 타입지정해라 ㅅㄱ
// 나: 아

interface DivProps {
    top: string;
}

const DivIconContainer = styled.div<DivProps>`

position: absolute; 
top: ${props => props.top};
left: 10px;
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
position: absolute;
width: 52px;
height: 20px;
top: ${props => props.top};
left: ${props => props.left};
cursor: 'pointer';

`

//////////////////////////////////////////////
//////////////////////////////////////////////


const WinIcon = () => {


    return (
        <>
            <DivIconContainer top= "5px" style={{cursor: "url(" + "https://cur.cursors-4u.net/nature/nat-10/nat927.png" + "), auto"}}>
                <Icon src={icon1} top="15px" left="14px">
                </Icon>
                <Icon1Label top="30px" left="6px">
                    chrome
                </Icon1Label>
            </DivIconContainer>

            <DivIconContainer top="90px">
                <Icon src={icon2} top="15px" left="10px">
                </Icon>
                <Icon1Label top="32px" left="2px">
                    notepad
                </Icon1Label>
            </DivIconContainer>

            <DivIconContainer top="175px">
                <Icon src={icon3} top="15px" left="13px">
                </Icon>
                <Icon1Label top="32px" left="5px">
                    coffee
                </Icon1Label>
            </DivIconContainer>

            <DivIconContainer top="260px" style={{cursor: "url(" + "https://cur.cursors-4u.net/nature/nat-1/nat21.png" + "), auto"}}>
                <Icon src={icon4} top="15px" left="13px">
                </Icon>
                <Icon1Label top="32px" left="3px">
                    hamster
                </Icon1Label>
            </DivIconContainer>

        </>

    );

}

export default WinIcon; 