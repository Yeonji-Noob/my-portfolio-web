import { useState } from "react";

import styled from "styled-components";



export const CurrentTime = () => {

    const [timer, setTimer] = useState("00:00")

    const currentTimer = () => {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const meridiem = String(date.getHours() >= 12 ? 'PM' : 'AM');
        setTimer(`${meridiem} ${hours}:${minutes}`);
    }

    const startTimer = () => {
        setInterval(currentTimer, 1000);
    }

    startTimer();

    return (
        <SystemDate>
            {timer}
        </SystemDate>
    );
}


const SystemDate = styled.span`
position: relative;
top: 4px;
display: block;
font-weight: bold;
text-align: end;
right: 5px;

`;