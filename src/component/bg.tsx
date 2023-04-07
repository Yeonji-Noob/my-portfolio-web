import Videobgpc from "../imgs/bg/background-web_ver.mp4";
import styled from "styled-components";

const Bg_Container = styled.div`
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

            <Bg_Container>
                <VideoBg className="pc" src={Videobgpc} playsInline muted autoPlay loop width="100%" height="100%">
                </VideoBg>
                {/* <video className="mb" src="./imgs/bg/background-mobile_ver.mp4" playsInline autoPlay loop></video> */}
            </Bg_Container>

    );
}

export default BackGround;