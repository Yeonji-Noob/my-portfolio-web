// import { useState } from "react";
import { create } from "zustand";
import { ComponentsProps } from "../common/win-icon";
import icon4 from "../../imgs/icons/hamster_icon.png";


export interface HamsterStore {
  isHamster: boolean;
  setHamster: (value: boolean) => void;
}

// zustand store
export const useHamsterStore = create<HamsterStore>(set => ({
  isHamster: false, //초기값 설정
  setHamster: value => set(() => ({ isHamster: value }))
}));


export const Hamster = ({ DivIconContainer, Icon, Icon1Label }: ComponentsProps) => {


  const isHamster = useHamsterStore(state => state.isHamster);
  const setHamster = useHamsterStore(state => state.setHamster)


  return (
    <DivIconContainer top="260px" left="10px" style={{ cursor: `url(https://cur.cursors-4u.net/nature/nat-1/nat21.png), auto` }}
      onClick={() => setHamster(!isHamster)}
    >
      <Icon src={icon4} top="15px" left="13px">
      </Icon>
      <Icon1Label top="35px" left="3px" style={{ color: isHamster ? 'white' : '' }}>
        hamster
      </Icon1Label>
    </DivIconContainer>
  );

} 