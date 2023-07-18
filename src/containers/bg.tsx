import Videobgpc from "../imgs/bg/background-web_ver.mp4";
import Videobgpc2 from "../imgs/bg/background-web2_ver.mp4"
import Videobgmb from "../imgs/bg/background-mobile_ver.mp4";
import styled from "styled-components";
import { useHamsterStore } from "../component/hamster/hamster-icon";





//export를 붙이면 {}로 내보내기가 가능해짐 
// export const VideoBg2 = styled.video`

// display: none;
// position: absolute;
// width: 100%;
// height: 100%;
// object-fit: cover;
// z-index: -2;

// `;


const Bg = styled.div`
background-color: #fff09a;
`;

const BackGround: React.FC = () => {


  const isHamster = useHamsterStore((state: { isHamster: boolean }) => state.isHamster);


  return (

    <BgContainer>
      <VideoBg className="pc" src={Videobgpc} playsInline muted autoPlay loop width="100%" height="100%"
        style={{ display: isHamster ? 'none' : 'block' }}>
      </VideoBg>
      <MobileVideoBg className="mb" src={Videobgmb} playsInline muted autoPlay loop width="100%" height="100%">
      </MobileVideoBg>
      <VideoBg className="pc2" src={Videobgpc2} playsInline muted autoPlay loop width="100%" height="100%"
        style={{ display: isHamster ? 'block' : 'none' }}
      >
      </VideoBg>
      <Bg></Bg>
    </BgContainer>

  );
}

export default BackGround;


//백그라운드 컨테이너
const BgContainer = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-color: #fff09a;
z-index: -2;
`;



//배경 1
const VideoBg = styled.video`
display: block;
position: absolute;
width: 100%;
height: 100%;
object-fit: cover;
z-index: -2;

@media (max-width: 499px) {
    display:none;
  }  
`;

const MobileVideoBg = styled.video`
  
  display: none;

  @media (max-width: 499px) {
    display:block;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
    overflow:hidden;
  }  

`;