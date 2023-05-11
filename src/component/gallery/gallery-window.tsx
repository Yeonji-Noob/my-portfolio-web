import { useRef } from "react";
import { Window, WindowHeader, WindowContent, Button } from "react95";
import styled from "styled-components";
import Draggable from "react-draggable";
import { ShowDivProps } from "../chrome/chrome_window";

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

export const GalleryWindow = ({ showDiv, setShowDiv }: ShowDivProps) => {

  const CloseButtonClick = () => {

    setShowDiv(!showDiv)

  }

  // draggable 사용 시 strictMode 콘솔창 에러때문에 넣었음 
  // https://wazacs.tistory.com/36
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} >

      <Window ref={nodeRef} id="parentWindow"
        style={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          translate: '-50%',
          zIndex: '99',

          width: '40vw',
          minWidth: '280px',
          maxWidth: '500px',

          height: '40vw',
          minHeight: '450px',
          maxHeight: '600px',

          display: showDiv ? 'block' : 'none'
        }} >

        <WindowHeader style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '37px', backgroundColor: 'Deeppink' }}>
          <span style={{ textShadow: '0px 1px 2px #000000' }}>gallery</span>

          <Button onClick={CloseButtonClick}>
            <CloseIcon></CloseIcon>
          </Button>

        </WindowHeader>


        <WindowContent style={{ width: '100%', minHeight: '400px', height: '36vw', maxHeight: '550px' }}>


          <iframe src="https://www.instagram.com/d3mi_iii/embed" width="100%" height="99%" frameBorder={0} scrolling="no" title="myInstaGallery" />


        </WindowContent>
      </Window>

    </Draggable>
  );
}