import cdz from "../../../assets/clubImg/cdz.jpeg";
import catLove from "../../../assets/clubImg/가대사랑.jpg";
import caritas from "../../../assets/clubImg/까리따스.jpg";
import show from "../../../assets/clubImg/성심극.jpg";
import peopleRight from "../../../assets/clubImg/인권.jpg";
import history from "../../../assets/clubImg/호우회.jpeg";
import aisec from "../../../assets/clubImg/aisec.png";
import cahong from "../../../assets/clubImg/cahong.jpg";
import catfactory from "../../../assets/clubImg/catfactory.jpg";
import ccc from "../../../assets/clubImg/ccc.png";
import coma from "../../../assets/clubImg/coma.png";
import joy from "../../../assets/clubImg/joy.jpg";
import shield from "../../../assets/clubImg/shield.jpeg";
import cine from "../../../assets/clubImg/cine.png";
import mod from "../../../assets/clubImg/mod.png";
import anicat from "../../../assets/clubImg/anicat.jpg";

function BoothDetail() {
  const Kim = [
    {
      boothName: "국제관",
      clubName: "동아리 이름1", //동아리이름
      discript:
        "집가고 싶습니다. 집에 가고 싶기 때문입니다. 아! 배가 고파서 앞이 안보이는군요", //설명
      location: "1층",
    },
    {
      boothName: "국제관",
      clubName: "동아리 이름2", //동아리이름
      discript: "설명2", //설명
      location: "2층",
    },
    {
      boothName: "국제관",
      clubName: "동아리 이름3", //동아리이름
      discript: "설명3", //설명
      location: "3층",
    },
    {
      boothName: "국제관",
      clubName: "동아리 이름4", //동아리이름
      discript: "설명4", //설명
      location: "층",
    },
    {
      boothName: "국제관",
      clubName: "동아리 이름5", //동아리이름
      discript: "설명5", //설명
      location: "3층",
    },
    {
      boothName: "국제관",
      clubName: "동아리 이름6", //동아리이름
      discript: "설명6", //설명
      location: "3층",
    },
  ];

  const Plaza = [
    {
      boothName: "씨네필",
      clubName: "동아리 이름2", //동아리이름
      discript: "설명2", //설명
      location: "2층",
      img: cine,
      background: "#1A1A1A",
      color: "white",
    },
    {
      boothName: "MOD",
      clubName: "동아리 이름3", //동아리이름
      discript: "설명3", //설명
      location: "3층",
      img: mod,
      background: "white",
      color: "black",
    },
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
      boothName: "가대사랑",
      clubName: "동아리 이름4", //동아리이름
      discript: "설명4", //설명
      location: "3층",
      img: catLove,
      background: "#039ECC",
      color: "white",
    },
    {
      boothName: "애니캣",
      clubName: "동아리 이름5", //동아리이름
      discript: "설명5", //설명
      location: "3층",
      img: anicat,
      background: "white",
      color: "black",
    },
    {
      boothName: "까리따스",
      clubName: "동아리 이름6", //동아리이름
      discript: "설명6", //설명
      location: "3층",
      img: caritas,
      background: "white",
      color: "black",
    },
    {
      boothName: "포쿠",
      clubName: "동아리 이름6", //동아리이름
      discript: "설명6", //설명
      location: "3층",
      //img: sharp,
      background: "black",
      color: "white",
    },
    {
      boothName: "성심극연구회",
      clubName: "동아리 이름6", //동아리이름
      discript: "설명6", //설명
      location: "3층",
      img: show,
      background: "white",
      color: "black",
    },
    {
      boothName: "인권위원회",
      clubName: "동아리 이름6", //동아리이름
      discript: "설명6", //설명
      location: "3층",
      img: peopleRight,
      background: "white",
      color: "black",
    },
    {
      boothName: "JOY",
      clubName: "동아리 이름6", //동아리이름
      discript: "설명6", //설명
      location: "3층",
      img: joy,
      background: "#18D8FF",
      color: "white",
    },
    {
      boothName: "CCC",
      clubName: "동아리 이름6", //동아리이름
      discript: "설명6", //설명
      location: "3층",
      img: ccc,
      background: "#313D79",
      color: "#EC7052",
    },
    {
      boothName: "특수교육과",
      clubName: "동아리 이름6", //동아리이름
      discript: "설명6", //설명
      location: "3층",
      //img: sharp,
      background: "black",
      color: "white",
    },
    {
      boothName: "식품영양학과",
      clubName: "동아리 이름6", //동아리이름
      discript: "설명6", //설명
      location: "3층",
      //img: sharp,
      background: "black",
      color: "white",
    },
    {
      boothName: "아이섹",
      clubName: "동아리 이름6", //동아리이름
      discript: "설명6", //설명
      location: "3층",
      img: aisec,
      background: "#313D79",
      color: "white",
    },
    {
      boothName: "가홍이",
      clubName: "동아리 이름6", //동아리이름
      discript: "설명6", //설명
      location: "3층",
      img: cahong,
      background: "white",
      color: "#313D79",
    },
    {
      boothName: "캣팩토리",
      clubName: "동아리 이름6", //동아리이름
      discript: "설명6", //설명
      location: "3층",
      img: catfactory,
      background: "white",
      color: "#313D79",
    },
    {
      boothName: "COMA",
      clubName: "동아리 이름6", //동아리이름
      discript: "설명6", //설명
      location: "3층",
      img: coma,
      background: "white",
      color: "black",
    },
    {
      boothName: "호우회",
      clubName: "동아리 이름6", //동아리이름
      discript: "설명6", //설명
      location: "3층",
      img: history,
      background: "#FFFFFF",
      color: "black",
    },
    {
      boothName: "쉴드",
      clubName: "동아리 이름6", //동아리이름
      discript: "설명6", //설명
      location: "3층",
      img: shield,
      background: "black",
      color: "white",
    },
    {
      boothName: "아동학과",
      clubName: "동아리 이름6", //동아리이름
      discript: "설명6", //설명
      location: "3층",
      //img: sharp,
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
  return { Nichols, Kim, Plaza, Andrea };
}
export default BoothDetail;
