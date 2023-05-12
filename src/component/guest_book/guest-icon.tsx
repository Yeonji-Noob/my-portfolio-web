import { useState } from "react";
import { useHamsterStore } from "../hamster/hamster-icon";
import { ComponentsProps } from "../common/win-icon"
import icon5 from "../../imgs/icons/guest_book.png";
import { GuestBookWindow, GuestWarningWindow } from "./";

// ComponentsProps에 하나만 더 추가하면 되니까 
// extends를 해주었다.

// interface GuestBookProps extends ComponentsProps {
//   IconClick: () => void;
// }

export const GuestBook = ({ DivIconContainer, Icon, Icon1Label }: ComponentsProps) => {

  const isHamster = useHamsterStore((state: { isHamster: boolean }) => state.isHamster);

  const [showDiv, setShowDiv] = useState<boolean>(false)

  const IconClick = () => {
    setShowDiv(true);
  }


  return (
    <>
      <GuestWarningWindow></GuestWarningWindow>
      <GuestBookWindow showDiv={showDiv} setShowDiv={setShowDiv}></GuestBookWindow>
      <DivIconContainer onClick={IconClick} top="14px" left="86px">
        <Icon src={icon5} top="8px" left="14px" alt="guestbook-icon">
        </Icon>
        <Icon1Label top="26px" left="6px" style={{ color: isHamster ? 'white' : '' }}>
          guest_
          book
        </Icon1Label>
      </DivIconContainer>
    </>
  );
}