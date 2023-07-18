import { useState } from "react";

import { useHamsterStore } from "../hamster/hamster-icon";
import icon2 from "../../imgs/icons/notepad.png";
import { NotepadWindow } from "./notepad-window";

//interface
import { ComponentsProps } from "../interface";


export const Notepad = ({ DivIconContainer, Icon, Icon1Label }: ComponentsProps) => {

    const isHamster = useHamsterStore((state: { isHamster: boolean }) => state.isHamster);

    const [showDiv, setShowDiv] = useState<boolean>(false)

    const IconClick = () => {
        setShowDiv(true);
    }


    return (
        <>
            <NotepadWindow showDiv={showDiv} setShowDiv={setShowDiv} ></NotepadWindow>
            <DivIconContainer onClick={IconClick} onTouchStart={IconClick} top="90px" left="10px" style={{ cursor: `url(https://cur.cursors-4u.net/cursors/cur-11/cur1046.cur), auto` }}>
                <Icon src={icon2} top="15px" left="10px" alt="notepad-icon">
                </Icon>
                <Icon1Label top="35px" left="2px" style={{ color: isHamster ? 'white' : '' }}>
                    notepad
                </Icon1Label>
            </DivIconContainer>
        </>
    );
}