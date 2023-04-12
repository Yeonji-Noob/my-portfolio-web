import { Dispatch, SetStateAction } from "react";
import { Window, WindowHeader, WindowContent, Button, Frame, Separator, Monitor } from "react95";
import styled from "styled-components";
import Draggable from "react-draggable";
import { useRef } from "react";

import MonitiorImg from "../../imgs/bg/welcome-monitor_background.jpg"

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


const WelcomeTitle = styled.span`
display: block;
font-size: 20px;


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


            <Window ref={nodeRef} id="parentWindow" style={{ position: 'absolute', top: '100px', zIndex: '99', width: '500px', height: '500px', left: '50%', translate: '-50%', display: showDiv ? 'none' : 'block' }} >
                <WindowHeader style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '37px', backgroundColor: 'blue' }}>
                    <span style={{ textShadow: '0px 1px 2px #000000' }}>Welcome</span>
                    <Button onClick={CloseButtonClick}>
                        <CloseIcon></CloseIcon>
                    </Button>
                </WindowHeader>


                <WindowContent style={{ display: 'flex', flexDirection: 'column' }}>

                    <WelcomeTitle>
                        Welcome to Portfolio95
                    </WelcomeTitle>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Frame variant="field" style={{
                            marginTop: '1rem',
                            padding: '1rem',
                            height: '370px',
                            width: '300px',
                            backgroundColor: 'lightyellow'
                        }}>
                            <div style={{marginTop:'125px' ,marginLeft:'25px'}}>
                                <Monitor backgroundStyles={{ background:'blue' }} />
                            </div>

                        </Frame>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Button style={{ width: '150px', marginTop: '16px', marginLeft: '18px' }}>Default</Button>
                            <Button style={{ width: '150px', marginTop: '12px', marginLeft: '18px' }}>Default</Button>
                            <Button style={{ width: '150px', marginTop: '12px', marginLeft: '18px' }}>Default</Button>
                            <Separator style={{ width: '150px', marginTop: '40px', marginLeft: '18px' }} />
                            <Button style={{ width: '150px', marginTop: '12px', marginLeft: '18px' }}>Close</Button>
                        </div>

                    </div>


                </WindowContent>
            </Window>

        </Draggable>
    );
}


export default Welcome;