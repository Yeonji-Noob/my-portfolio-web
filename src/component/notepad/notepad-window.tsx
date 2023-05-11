import { Window, WindowHeader, WindowContent, Button, TextInput } from "react95";
import styled from "styled-components";
import Draggable from "react-draggable";
import { useRef } from "react";
import { ShowDivProps } from "../chrome/chrome_window";
// import { Resizable } from 'react-resizable';

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


const MaximizeButton = styled.span`

display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    position: relative;
    &:before,
    &:after {
      content: '';
      position: absolute;
    }
    &:before {
      height: 50%;
      width: 9px;
      left: 1px;
      top: 1px;
      border: 3px solid black
    }
`;

const MinimizeButton = styled.span`

display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    position: relative;
    &:before,
    &:after {
      content: '';
      position: absolute;
    }
    &:before {
      height: 50%;
      width: 15px;
      left: 1px;
      top: 4px;
      border-bottom: 3px solid black
    }
`;



export const NotepadWindow: React.FC<ShowDivProps> = ({ showDiv, setShowDiv }: ShowDivProps) => {

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
                    minWidth: '270px',
                    maxWidth: '500px',

                    maxHeight: '500px',

                    display: showDiv ? 'block' : 'none'
                }} >

                <WindowHeader style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '37px', backgroundColor: 'skyblue' }}>
                    <span style={{ textShadow: '0px 1px 2px #000000' }}>Untitled - Notepad</span>

                    <div style={{ display: 'flex', width: '93px' }}>
                        <Button variant='raised' disabled>
                            <MinimizeButton></MinimizeButton>
                        </Button>
                        <Button disabled>
                            <MaximizeButton></MaximizeButton>
                        </Button>
                        <Button onClick={CloseButtonClick}>
                            <CloseIcon></CloseIcon>
                        </Button>
                    </div>

                </WindowHeader>


                <WindowContent>
                    <TextInput multiline
                        rows={4}
                        fullWidth style={{ width: '100%', height: '400px' }}>

                    </TextInput>
                </WindowContent>
            </Window>

        </Draggable>

    );
}