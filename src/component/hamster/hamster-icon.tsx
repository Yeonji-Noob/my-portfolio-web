import { useState, useContext, useMemo } from "react";
import { create } from "zustand";
import { ComponentsProps } from "../interface";
import icon4 from "../../imgs/icons/hamster_icon.png";

import { HamsterStore } from "../interface";

// zustand store
export const useHamsterStore = create<HamsterStore>(set => ({
  isHamster: false, //초기값 설정
  setHamster: value => set(() => ({ isHamster: value }))
}));


export const Hamster = ({ DivIconContainer, Icon, Icon1Label }: ComponentsProps) => {

  const isHamster = useHamsterStore(state => state.isHamster);
  const setHamster = useHamsterStore(state => state.setHamster);


  const ChangeHamster = () => {
    return setHamster(!isHamster);
  };


  return (
    <DivIconContainer
      top="260px"
      left="10px"
      style={{ cursor: `url(https://cur.cursors-4u.net/nature/nat-1/nat21.png), auto` }}
      onClick={ChangeHamster}
      onTouchEnd={ChangeHamster}
    >
      <Icon src={icon4} top="15px" left="13px" alt="hamster-icon">
      </Icon>
      <Icon1Label top="35px" left="3px" style={{ color: isHamster ? 'white' : '' }}>
        hamster
      </Icon1Label>
    </DivIconContainer>
  );

} 