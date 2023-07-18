import { Window, WindowHeader, WindowContent, Button } from "react95";
import styled from "styled-components";
import Draggable from "react-draggable";
import { useRef } from "react";
import { Warning } from "./index"



export const GuestWarningWindow = () => {

  const CloseButtonClick = () => {

    // setShowDiv(!showDiv)
    const aboutWindow = document.getElementById('guest-warning-window');
    if (aboutWindow !== null) {
      aboutWindow.style.display = 'none';
    }

  };

  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} >

      <Window ref={nodeRef} id="guest-warning-window"
        style={{
          display: 'none',
          position: 'absolute',
          top: '25%',
          left: '50%',
          translate: '-50%',
          zIndex: '100',

          width: '40vw',
          minWidth: '270px',
          maxWidth: '500px',

          height: '200px',
          maxHeight: '500px',

          // display: showDiv ? 'block' : 'none'
        }} >

        <WindowHeader style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '37px',
          backgroundColor: 'blue'
        }}>
          <span style={{ textShadow: '0px 1px 2px #000000' }}>Message</span>

          <Button onClick={CloseButtonClick} onTouchStart={CloseButtonClick}>
            <CloseIcon></CloseIcon>
          </Button>

        </WindowHeader>


        <WindowContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <Warning></Warning>
          <p>스팸성 광고 댓글때문에 <br /> 방명록 남기기를 막아놨습니다. <br /> 방명록을 남기고 싶으시다면</p>
        </WindowContent>
      </Window>

    </Draggable>
  );
}


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
