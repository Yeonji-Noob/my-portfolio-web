import { useState } from "react";
import { useHamsterStore } from "../hamster/hamster-icon";
import { ChromeWindow } from "./index";
import { ComponentsProps } from "../common/win-icon";

import icon1 from "../../imgs/icons/chrome.png";


export const ChromeIcon = ({ DivIconContainer, Icon, Icon1Label }: ComponentsProps) => {

    const isHamster = useHamsterStore((state: { isHamster: boolean }) => state.isHamster);

    const [showDiv, setShowDiv] = useState<boolean>(false)

    const IconClick = () => {
        setShowDiv(true);
    }


    return (
        <>
            <ChromeWindow showDiv={showDiv} setShowDiv={setShowDiv} ></ChromeWindow>
            <DivIconContainer onClick={IconClick} top="5px" left="10px" style={{ cursor: `url(https://cur.cursors-4u.net/nature/nat-10/nat927.png), auto` }}>
                <Icon src={icon1} top="15px" left="14px" alt="chrome-icon">
                </Icon>
                <Icon1Label top="35px" left="6px" style={{ color: isHamster ? 'white' : '' }}>
                    chrome
                </Icon1Label>
            </DivIconContainer>
        </>
    );
}