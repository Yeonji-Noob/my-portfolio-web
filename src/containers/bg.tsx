// gif가 제일 용량이 작아서 채택
import VideobgpcGif from "../imgs/bg/background-web_ver.gif";
import Videobgpc2Gif from "../imgs/bg/background-web2_ver.gif";
import styled from "styled-components";
import { useHamsterStore } from "../component/hamster/hamster-icon";





// export를 붙이면 {}로 내보내기가 가능해짐 
export const VideoBg2 = styled.video`

display: none;
position: absolute;
width: 100%;
height: 100%;
object-fit: cover;
z-index: -2;

`;


const Bg = styled.div`
background-color: #fff09a;
`;

const BackGround: React.FC = () => {


  const isHamster = useHamsterStore((state: { isHamster: boolean }) => state.isHamster);


  return (

    <BgContainer>
      <GifBg className="pc" src={VideobgpcGif}
        style={{ display: isHamster ? 'none' : 'block' }} alt="background_Hamster_img1">
      </GifBg>

      <GifBg className="pc2" src={Videobgpc2Gif}
        style={{ display: isHamster ? 'block' : 'none' }} alt="background_Hamster_img2"
      >
      </GifBg>
      <Bg></Bg>
    </BgContainer>

  );
}

export default BackGround;


// 백그라운드 컨테이너
const BgContainer = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-color: #fff09a;
z-index: -2;
`;



// 배경 1
// const VideoBg = styled.video`
// display: block;
// position: absolute;
// width: 100%;
// height: 100%;
// object-fit: cover;
// z-index: -1;

// @media (max-width: 499px) {
//     display:none;
//   }  
// `;

const GifBg = styled.img`
display: block;
position: absolute;
width: 100%;
height: 100%;
object-fit: cover;
z-index: -1;

@media (max-width: 499px) {
    display:none;
  }  
`;

// const MobileVideoBg = styled.video`
  
//   display: none;

//   @media (max-width: 499px) {
//     display:block;
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     z-index: -2;
//     overflow:hidden;
//   }  

// `;