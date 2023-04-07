import { Left } from "@react95/icons/@types";
import styled from "styled-components";
import icon1 from "../../imgs/icons/chrome.png"
import icon2 from "../../imgs/icons/notepad.png"

const Icon1 = styled.img`

position: absolute;
width: 40px;
height: 40px;
left: 9px;
top: 10px;


`;

const Icon1Label = styled.p`
position: absolute;
width: 52px;
height: 20px;
top: 30px;
left: 5px;

`

const Icon2 = styled.img`
position: absolute;
width: 40px;
height: 40px;
top: 10px;
left: 5px;
cursor: 'pointer';
`;

const Icon1Label2 = styled.p`
position: absolute;
width: 52px;
height: 20px;
top: 32px;
left: 2px;
cursor: 'pointer';

`;


const WinIcon = () => {

    return (
        <>
            <div style={{ position: 'absolute', top: '5px', left: '10px', width: '60px', height: '75px', cursor: 'pointer' }}>
                <Icon1 src={icon1}>
                </Icon1>
                <Icon1Label>
                    chrome
                </Icon1Label>
            </div>


            <div style={{ position: 'absolute', width: '60px', height: '75px', cursor: 'pointer', top: '90px', left: '10px' }}>
                <Icon2 src={icon2}>
                </Icon2>
                <Icon1Label2>
                    notepad
                </Icon1Label2>
            </div>


        </>

    );

}

export default WinIcon; 