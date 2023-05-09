import { Dispatch, SetStateAction, useState, useRef } from "react";
import { Window, WindowHeader, WindowContent, Button, Tabs, Tab, TabBody } from "react95";
import styled from "styled-components";
import Draggable from "react-draggable";
import { SkillTab, AboutTab, ProjectTab } from "./index";

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

interface ShowDivProps {
  showDiv: boolean;
  //set붙은 녀석은 boolean만 넣으면 안됨,,, 이렇게 해줘야 함
  setShowDiv: Dispatch<SetStateAction<boolean>>
}



export const ChromeWindow: React.FC<ShowDivProps> = ({ showDiv, setShowDiv }) => {

  const CloseButtonClick = () => {

    setShowDiv(!showDiv)

  }

  const [state, setState] = useState({
    activeTab: 0
  });

  // draggable 사용 시 strictMode 콘솔창 에러때문에 넣었음 
  // https://wazacs.tistory.com/36
  const nodeRef = useRef(null);

  const { activeTab } = state;


  const handleChange = (
    value: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log({ value, event });
    setState({ activeTab: value });
  };


  return (

    <Draggable nodeRef={nodeRef} >
      <Window ref={nodeRef} id="parentWindow"
        style={{
          position: 'absolute',
          top: '25%',
          zIndex: '99',

          maxWidth: '700px',
          width: '87vw',
          minWidth: '280px',

          minHeight: '400px',
          height: '90vw',
          maxHeight: '650px',
          display: showDiv ? 'block' : 'none',
        }}
      >
        <WindowHeader
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '37px',
            backgroundColor: 'blue'
          }}>
          <span style={{ textShadow: '0px 1px 2px #000000' }}>about.exe</span>
          <Button onClick={CloseButtonClick}>
            <CloseIcon></CloseIcon>
          </Button>
        </WindowHeader>


        <WindowContent
          style={{
            padding: 'clamp(0.1rem ,3vw, 1rem)',
            paddingLeft: '0.6rem',
            paddingTop: '0.8rem',
          }}>
          <Tabs value={activeTab} onChange={handleChange}>
            <Tab value={0}>about</Tab>
            <Tab value={1}>skill</Tab>
            <Tab value={2}>project</Tab>
          </Tabs>
          <TabBody
            style={{
              minWidth: '255px',
              width: '80vw',
              maxWidth: '670px',

              minHeight: '280px',
              height: '68vw',
              maxHeight: '545px',

              padding: '0.5rem'
            }}>
            {activeTab === 0 && (
              <div>
                <AboutTab />
              </div>
            )}
            {activeTab === 1 && (
              <div>
                <SkillTab />
              </div>
            )}
            {activeTab === 2 && (
              <div>
                <ProjectTab />
              </div>
            )}
          </TabBody>
        </WindowContent>
      </Window>
    </Draggable >
  );
}