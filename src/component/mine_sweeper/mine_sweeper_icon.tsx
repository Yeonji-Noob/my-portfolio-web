import { useState } from "react";
import { useHamsterStore } from "../hamster/hamster-icon";
import icon3 from "../../imgs/icons/mine_sweeper.png";
import { MineWindow } from "./mine_sweeper_window";

import { ComponentsProps } from "../interface";


export const MineSweeper = ({ DivIconContainer, Icon, Icon1Label }: ComponentsProps) => {

  const isHamster = useHamsterStore((state: { isHamster: boolean }) => state.isHamster);

  const [showDiv, setShowDiv] = useState<boolean>(false)

  const IconClick = () => {
    setShowDiv(true);
  }

  return (
    <>
      <MineWindow showDiv={showDiv} setShowDiv={setShowDiv} ></MineWindow>
      <DivIconContainer onClick={IconClick} onTouchStart={IconClick} top="170px" left="10px"
        style={{ cursor: "url(https://cur.cursors-4u.net/others/oth-2/oth197.cur), auto" }}>
        <Icon src={icon3} top="15px" left="13px" alt="mine_sweeper-icon">
        </Icon>
        <Icon1Label top="35px" left="5px" style={{ color: isHamster ? 'white' : '' }}>
          mine_
          sweeper
        </Icon1Label>
      </DivIconContainer>
    </>
  );
}