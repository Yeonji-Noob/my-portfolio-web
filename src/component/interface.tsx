import { Dispatch, SetStateAction } from "react";
import { StyledComponent } from "styled-components";

export interface ShowDivProps {
  showDiv: boolean;
  setShowDiv: Dispatch<SetStateAction<boolean>>
}

export interface DivProps {
  top: string;
  left: string;
}

export interface ImgProps {
  top: string;
  left: string;
}

export interface TopLeftProps {
  top: string;
  left: string;
}

export interface ComponentsProps {

  DivIconContainer: StyledComponent<"div", any, DivProps, never>;
  Icon: StyledComponent<"img", any, ImgProps, never>;
  Icon1Label: StyledComponent<"p", any, TopLeftProps, never>;

}



export interface HamsterStore {
  isHamster: boolean;
  setHamster: (value: boolean) => void;
}