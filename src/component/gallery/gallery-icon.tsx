import { useState } from "react";
import { useHamsterStore } from "../hamster/hamster-icon";
import { ComponentsProps } from "../common/win-icon";
import { GalleryWindow } from "./index"

import icon6 from "../../imgs/icons/art_icon.png"

export const Gallery = ({ DivIconContainer, Icon, Icon1Label }: ComponentsProps) => {

  const isHamster = useHamsterStore((state: { isHamster: boolean }) => state.isHamster);

  const [showDiv, setShowDiv] = useState<boolean>(false)

  const IconClick = () => {
    setShowDiv(true);
  }


  return (
    <>
      <GalleryWindow showDiv={showDiv} setShowDiv={setShowDiv} ></GalleryWindow>
      <DivIconContainer onClick={IconClick} top="90px" left="86px"
        style={{ cursor: "url(https://ani.cursors-4u.net/symbols/sym-9/sym846.png), auto" }}
      >
        <Icon src={icon6} top="15px" left="15px" alt="gallery-icon">
        </Icon>
        <Icon1Label top="35px" left="2px" style={{ color: isHamster ? 'white' : '' }}>
          gallery
        </Icon1Label>
      </DivIconContainer>
    </>
  );
}