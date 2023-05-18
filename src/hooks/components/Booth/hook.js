import cdz from "../../../assets/clubImg/cdz.jpeg";
import fom from "../../../assets/clubImg/fom.jpeg";
import sacred from "../../../assets/clubImg/sacred.jpeg";
import sharp from "../../../assets/clubImg/sharp.jpeg";
import busking from "../../../assets/clubImg/the busking.jpeg";
import game from "../../../assets/clubImg/the game.jpeg";

function BoothDetail() {
  const Kim = [
    {
      boothName: "CDZ",
      clubName: "CDZ와 함께하는 부스", //동아리이름
      discript:
        "CDZ는 가톨릭대학교 유일 중앙 댄스 동아리이며 간식 이벤트 부스입니다.", //설명
      location: "1층",
      img: cdz,
      background: "black",
      color: "white",
    },
    {
      boothName: "FOM",
      clubName: "동아리 이름2", //동아리이름
      discript: "설명2", //설명
      location: "2층",
      img: fom,
      background: "black",
      color: "white",
    },
    {
      boothName: "세이크리드",
      clubName: "동아리 이름3", //동아리이름
      discript: "설명3", //설명
      location: "3층",
      img: sacred,
      background: "white",
      color: "black",
    },
    {
      boothName: "더 버스킹",
      clubName: "동아리 이름4", //동아리이름
      discript: "설명4", //설명
      location: "3층",
      img: busking,
      background: "white",
      color: "black",
    },
    {
      boothName: "더 게임",
      clubName: "동아리 이름5", //동아리이름
      discript: "설명5", //설명
      location: "3층",
      img: game,
      background: "black",
      color: "white",
    },
    {
      boothName: "샤프",
      clubName: "동아리 이름6", //동아리이름
      discript: "설명6", //설명
      location: "3층",
      img: sharp,
      background: "black",
      color: "white",
    },
  ];
  const Nichols = [
    {
      boothName: "니콜스관",
      clubName: "동아리 이름1", //동아리이름
      discript:
        "집가고 싶습니다. 집에 가고 싶기 때문입니다. 아! 배가 고파서 앞이 안보이는군요", //설명
      location: "1층",
    },
    {
      boothName: "니콜스관",
      clubName: "동아리 이름2", //동아리이름
      discript: "설명2", //설명
      location: "2층",
    },
    {
      boothName: "니콜스관",
      clubName: "동아리 이름3", //동아리이름
      discript: "설명3", //설명
      location: "3층",
    },
    {
      boothName: "니콜스관",
      clubName: "동아리 이름4", //동아리이름
      discript: "설명4", //설명
      location: "층",
    },
    {
      boothName: "니콜스관",
      clubName: "동아리 이름5", //동아리이름
      discript: "설명5", //설명
      location: "3층",
    },
    {
      boothName: "니콜스관",
      clubName: "동아리 이름6", //동아리이름
      discript: "설명6", //설명
      location: "3층",
    },
  ];
  const Maria = [
    {
      boothName: "마리아관",
      clubName: "동아리 이름1", //동아리이름
      discript: "설명1", //설명
      location: "1층",
    },
    {
      boothName: "마리아관",

      clubName: "동아리 이름2", //동아리이름
      discript: "설명2", //설명
      location: "2층",
    },
    {
      boothName: "마리아관",

      clubName: "동아리 이름3", //동아리이름
      discript: "설명3", //설명
      location: "3층",
    },
    {
      boothName: "마리아관",

      clubName: "동아리 이름4", //동아리이름
      discript: "설명4", //설명
      location: "3층",
    },
    {
      boothName: "마리아관",

      clubName: "동아리 이름5", //동아리이름
      discript: "설명5", //설명
      location: "3층",
    },
    {
      boothName: "마리아관",

      clubName: "동아리 이름6", //동아리이름
      discript: "설명6", //설명
      location: "3층",
    },
  ];
  const Andrea = [
    {
      boothName: "안드레아관",
      clubName: "동아리 이름1", //동아리이름
      discript: "설명1", //설명
      location: "1층",
    },
    {
      boothName: "안드레아관",
      clubName: "동아리 이름2", //동아리이름
      discript: "설명2", //설명
      location: "2층",
    },
    {
      boothName: "안드레아관",
      clubName: "동아리 이름3", //동아리이름
      discript: "설명3", //설명
      location: "3층",
    },
    {
      boothName: "안드레아관",
      clubName: "동아리 이름4", //동아리이름
      discript: "설명4", //설명
      location: "3층",
    },
    {
      boothName: "안드레아관",
      clubName: "동아리 이름5", //동아리이름
      discript: "설명5", //설명
      location: "3층",
    },
    {
      boothName: "안드레아관",
      clubName: "동아리 이름6", //동아리이름
      discript: "설명6", //설명
      location: "3층",
    },
  ];
  return { Nichols, Kim, Maria, Andrea };
}
export default BoothDetail;
