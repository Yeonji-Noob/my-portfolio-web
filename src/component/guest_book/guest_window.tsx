import { Window, WindowHeader, WindowContent, Button } from "react95";
import styled from "styled-components";
import { useState } from "react";


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


export const GuestBook = () => {

  const [style, setStyle] = useState('block');


  return (
    <Window className="window1" style={{ position: 'absolute', zIndex: '99', width: '300px', height: '500px', display:`${style}` }} >
      <WindowHeader style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '37px', backgroundColor: 'pink' }}>
        <span style={{ textShadow: '0px 1px 2px #000000' }}>guest_book.txt</span>
        <Button onClick={ () => { setStyle('none') }}>
          <CloseIcon></CloseIcon>
        </Button>
      </WindowHeader>


      <WindowContent>
        ㅎㅇ
      </WindowContent>
    </Window>
  );
}