import styled from "styled-components";

const BgPattern = styled.div`

z-index: 98;
opacity: .7;
position: fixed;
left: 0;
top: 0;
right: 0;
bottom: 0;
width: 100%;
height: 100%;
overflow: hidden;
pointer-events: none;
background-image: radial-gradient(ellipse at center,transparent 0,transparent 60%,rgba(0,0,0,.25) 100%),
repeating-linear-gradient(0deg,transparent,transparent 1px,rgba(0,0,0,.35) 3px);
background-size: 100% 100% 100% 6px;
-webkit-animation: flicker .3s linear infinite;
animation: flicker .3s linear infinite;


`;


export default BgPattern;