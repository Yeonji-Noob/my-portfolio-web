import { Dispatch, SetStateAction } from "react";
import { Window, WindowHeader, WindowContent, Button } from "react95";
import styled from "styled-components";


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



// 문제 해결 (4/8)

// 창 닫기는 됨 근데 열기가 안됨 => 여는거 해결했는데 닫는게 안됨 => 창 열고닫는거 됨,,, ㅋㅋ

// 부모 컴포넌트의 useState props를 자식(여기)에다가 전달했는데 onclick하면 한번만 block이 되고 토글이 안됐었음
// 이유는 부모 컴포넌트에서 자식 컴포넌트로 전달한 useState props가 변경되어도 자식 컴포넌트가 재렌더링 되지 않아서였음

// 그래서 useState의 상태값 두개 모두를 자식인 여기로 넘겨줬더니 해결됨 ㅎㅎ
// props에 대한 이해 부족 실감..



export const GuestBook: React.FC<ShowDivProps> = ({ showDiv, setShowDiv }) => {

  const CloseButtonClick = () => {

    setShowDiv(!showDiv)

  }




  return (
    <Window id="parentWindow" style={{ position: 'absolute', top: '100px' , zIndex: '99', width: '300px', height: '500px', display: showDiv ? 'block' : 'none' }} >
      <WindowHeader style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '37px', backgroundColor: 'pink' }}>
        <span style={{ textShadow: '0px 1px 2px #000000' }}>guest_book.txt</span>
        <Button onClick={CloseButtonClick}>
          <CloseIcon></CloseIcon>
        </Button>
      </WindowHeader>


      <WindowContent>
        ㅎㅇ
      </WindowContent>
    </Window>
  );
}