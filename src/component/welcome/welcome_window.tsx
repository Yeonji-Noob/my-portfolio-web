import { Dispatch, SetStateAction } from "react";
import { Window, WindowHeader, WindowContent, Button, Frame, Separator, Monitor } from "react95";
import styled from "styled-components";
import Draggable from "react-draggable";
import { useRef } from "react";

import MonitorImg from "../../imgs/bg/welcome-monitor_background.jpg"
import TipIcon from "../../imgs/icons/tip.png"
import { GitHub } from "../common";

const CloseIcon = styled.span`

display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;
    &:before,
    &:after {
      content: '';
      position: absolute;
      background: ${({ theme }) => theme.materialText};
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
`;

const ButtonDivFlex = styled.div`

display: flex;
flex-direction: column;

@media (max-width: 375px) {
    display: none;
}

`;


const WelcomeTitle = styled.span`
display: block;
font-size: 20px;


`;


const WelcomeText = styled.p`
position: relative;
left:80px;
width:160px;
height: 20px;

`;


interface ShowDivProps {
    showDiv: boolean;
    setShowDiv: Dispatch<SetStateAction<boolean>>
}




const Welcome: React.FC<ShowDivProps> = ({ showDiv, setShowDiv }) => {

    const CloseButtonClick = () => {

        setShowDiv(!showDiv)

    }



    // draggable 사용 시 strictMode 콘솔창 에러때문에 넣었음 
    // https://wazacs.tistory.com/36
    const nodeRef = useRef(null);

    return (

        <Draggable nodeRef={nodeRef} >


            <Window ref={nodeRef} id="parentWindow" style={{ position: 'absolute', top: '10%', zIndex: '98', maxWidth: '100vw', height: '500px', left: '50%', translate: '-50%', display: showDiv ? 'none' : 'block' }} >
                <WindowHeader style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '37px', backgroundColor: 'blue' }}>
                    <span style={{ textShadow: '0px 1px 2px #000000' }}>Welcome</span>
                    <Button onClick={CloseButtonClick}>
                        <CloseIcon></CloseIcon>
                    </Button>
                </WindowHeader>


                <WindowContent style={{ display: 'flex', flexDirection: 'column' }}>

                    <WelcomeTitle>
                        Welcome to DEMI95
                    </WelcomeTitle>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Frame variant="field" style={{
                            marginTop: '1rem',
                            padding: '1rem',
                            height: '370px',
                            width: '300px',
                            backgroundColor: 'lightyellow'
                        }}>
                            <img src={TipIcon} alt="Tip" style={{ position: 'absolute' }} />
                            <WelcomeText>
                                Did you know...
                            </WelcomeText>
                            <WelcomeText style={{ fontSize: '13px' }}>
                                웹 브라우저 사이즈에 <br />최적화 되어있습니다.
                            </WelcomeText>
                            <div style={{ marginTop: '80px', marginLeft: '25px' }}>
                                {/* 4/13 background img url불러올때 아래처럼 써야 함 안그러면 잘 안먹음 별짓 다해봄 */}
                                {/* https://stackoverflow.com/questions/39195687/setting-a-backgroundimage-with-react-inline-styles */}
                                {/* 스택오버플로우 최고 */}
                                <Monitor backgroundStyles={{ backgroundImage: `url(${MonitorImg})` }} />
                            </div>

                        </Frame>
                        <ButtonDivFlex>
                            <Button style={{ width: '10vw', minWidth: '80px', maxWidth: '31vw', marginTop: '16px', marginLeft: '2vw' }}>about</Button>
                            <Button style={{ width: '10vw', minWidth: '80px', maxWidth: '31vw', marginTop: '12px', marginLeft: '2vw' }}><GitHub></GitHub></Button>
                            <Button style={{ width: '10vw', minWidth: '80px', marginTop: '12px', marginLeft: '2vw' }}>mail📧</Button>
                            <Separator style={{ width: '10vw', minWidth: '80px', maxWidth: '31vw', marginTop: '40px', marginLeft: '2vw' }} />
                            <Button style={{ width: '10vw', minWidth: '80px', maxWidth: '31vw', marginTop: '12px', marginLeft: '2vw' }} onClick={CloseButtonClick} >Close</Button>
                        </ButtonDivFlex>

                    </div>


                </WindowContent>
            </Window>

        </Draggable>
    );
}


export default Welcome;