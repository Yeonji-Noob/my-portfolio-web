import Videobgpc from "../imgs/bg/background-web_ver.mp4";
import styled from "styled-components";

const BgContainer = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-color: #fff09a;
z-index: -3;
`;


const VideoBg = styled.video`
position: absolute;
width: 100%;
height: 100%;
object-fit: cover;
z-index: -2;
`;

const BackGround:React.FC = () => {
    return (

            <BgContainer>
                <VideoBg className="pc" src={Videobgpc} playsInline muted autoPlay loop width="100%" height="100%">
                </VideoBg>
                {/* <video className="mb" src="./imgs/bg/background-mobile_ver.mp4" playsInline autoPlay loop></video> */}
            </BgContainer>

    );
}

export default BackGround;