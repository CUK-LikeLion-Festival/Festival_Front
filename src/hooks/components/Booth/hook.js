import cdz from "../../../assets/clubImg/cdz.jpeg";
import catLove from "../../../assets/clubImg/가대사랑부스.jpg";
import caritas from "../../../assets/clubImg/까리따스.jpg";
import show from "../../../assets/clubImg/성심극.jpg";
import peopleRight from "../../../assets/clubImg/인권부스.jpg";
import history from "../../../assets/clubImg/호우회.jpg";
import historyDetail from "../../../assets/clubImg/호우회부스.jpg";
import aisec from "../../../assets/clubImg/아이섹부스.jpg";
import cahong from "../../../assets/clubImg/가홍이부스.jpg";
import catfactory from "../../../assets/clubImg/catfactory.jpg";
import ccc from "../../../assets/clubImg/ccc.png";
import coma from "../../../assets/clubImg/coma.png";
import joy from "../../../assets/clubImg/joy.jpg";
import shield from "../../../assets/clubImg/shield.jpeg";
import cine from "../../../assets/clubImg/씨네필부스.jpg";
import mod from "../../../assets/clubImg/mod 부스.jpg";
import anicat from "../../../assets/clubImg/애니캣 부스.jpg";
import taekwondo from "../../../assets/clubImg/태권도.jpg";
import sacred from "../../../assets/clubImg/sacred.jpeg";
import silhum from "../../../assets/clubImg/silhum.jpg";
import foodtruck from "../../../assets/clubImg/foodtruck.png";
import special from "../../../assets/clubImg/특교과.jpg";
import specialDetail from "../../../assets/clubImg/특교과부스.jpg";
import child from "../../../assets/clubImg/아동학과.jpg";
import default_Img from "../../../assets/default_Img.png";
import rightDetail from "../../../assets/clubImg/인권부스상세.jpg";
import food from "../../../assets/clubImg/식영과부스.jpg";
import foodDetail from "../../../assets/clubImg/식영과부스 상세.jpg";
import shieldDetail from "../../../assets/clubImg/쉴드부스.jpg";

function BoothDetail() {
  const Kim = [
    {
      boothName: "태권도부 ",

      discript: "25일\n2:20 ~ 2:40", //설명
      location: "1층",
      background: "#ECECEC",
      color: "balck",
      img: taekwondo,
    },
    {
      boothName: "세이크리드",

      discript: "25일\n2:40 ~ 3:00", //설명
      location: "2층",
      img: sacred,
      background: "#FFFFFF",
      color: "black",
    },
    {
      boothName: "밴드실험",

      discript: "25일\n3:00 ~ 3:15", //설명
      location: "3층",
      img: silhum,
      background: "#E61F2E",
      color: "white",
    },
    {
      boothName: "콘서트홀등반가",
      img: default_Img,
      discript: "25일\n3:15 ~ 3:30", //설명
      location: "층",
      background: "#CD7988",
      color: "white",
    },
    {
      boothName: "남현식밴드",
      img: default_Img,
      discript: "25일\n3:30 ~ 3:45", //설명
      location: "3층",
      background: "#CD7988",
      color: "white",
    },
  ];

  const Plaza = [
    {
      boothName: "씨네필",
      discript: "", //설명
      location: "2층",
      img: cine,
      detailImg: cine,
      background: "white",
      color: "black",
    },
    {
      boothName: "MOD",
      discript: "", //설명
      location: "3층",
      img: mod,
      detailImg: mod,
      background: "#48B80C",
      color: "white",
    },
    {
      boothName: "CDZ",

      discript: "😥상세정보를 받아오지 못했습니다", //설명
      detailImg: cdz,
      location: "1층",
      img: cdz,
      background: "black",
      color: "white",
    },

    {
      boothName: "가대사랑",

      discript: "", //설명
      detailImg: catLove,
      location: "3층",
      img: catLove,
      background: "white",
      color: "white",
    },
    {
      boothName: "애니캣",

      discript: "", //설명
      detailImg: anicat,
      location: "3층",
      img: anicat,
      background: "#006547",
      color: "black",
    },
    {
      boothName: "까리따스",

      discript: "😥상세정보를 받아오지 못했습니다", //설명
      detailImg: caritas,
      location: "3층",
      img: caritas,
      background: "white",
      color: "#2E5A8B",
    },
    {
      boothName: "포쿠",

      discript: "😥상세정보를 받아오지 못했습니다", //설명
      detailImg: default_Img,
      location: "3층",
      img: default_Img,
      background: "#CD7988",
      color: "white",
    },
    {
      boothName: "성심극연구회",

      discript: "😥상세정보를 받아오지 못했습니다", //설명
      detailImg: show,
      location: "3층",
      img: show,
      background: "white",
      color: "black",
    },
    {
      boothName: "인권위원회",

      discript: "",
      // "사은품: 솜사탕과 간단한 간식\n참여방법: 구글 폼 작성\n온라인으로 참여 후 폼 화면을 보여주세요!", //설명
      detailImg: rightDetail,
      location: "3층",
      img: peopleRight,
      background: "#FFF6E0",
      color: "#FCED2C",
    },
    {
      boothName: "JOY",

      discript: "😥상세정보를 받아오지 못했습니다", //설명
      detailImg: joy,
      location: "3층",
      img: joy,
      background: "#18D8FF",
      color: "white",
    },
    {
      boothName: "CCC",

      discript: "😥상세정보를 받아오지 못했습니다", //설명
      detailImg: ccc,
      location: "3층",
      img: ccc,
      background: "#F7CBCB",
      color: "#EC7052",
    },
    {
      boothName: "특수교육과",

      discript: "",
      detailImg: specialDetail,
      location: "3층",
      img: special,
      background: "#F6E1AC",
      color: "#FFC9C9",
    },
    {
      boothName: "식품영양학과",

      discript: "", //설명

      location: "3층",
      img: food,
      detailImg: foodDetail,
      background: "#C7EEFF",
      color: "white",
    },
    {
      boothName: "아이섹",
      discript: "", //설명
      detailImg: aisec,
      location: "3층",
      img: aisec,
      background: "#5C449C",
      color: "#007FF2",
    },
    {
      boothName: "가홍이",

      discript: "", //설명
      detailImg: cahong,
      location: "3층",
      img: cahong,
      background: "white",
      color: "#313D79",
    },
    {
      boothName: "캣팩토리",

      discript:
        "칼선 스티커, 엽서, 투명 포토카드, 포스트잇, 학과별 리무버블 스티커(수량은 학과별 20개 이내) 판매 예정", //설명
      detailImg: catfactory,
      location: "3층",
      img: catfactory,
      background: "white",
      color: "#313D79",
    },
    {
      boothName: "COMA",

      discript: "😥상세정보를 받아오지 못했습니다", //설명
      detailImg: coma,
      location: "3층",
      img: coma,
      background: "white",
      color: "black",
    },
    {
      boothName: "호우회",

      discript: "", //설명
      detailImg: historyDetail,
      location: "3층",
      img: history,
      background: "#F6D9DE",
      color: "#F26A7E",
    },
    {
      boothName: "쉴드",
      discript: "",
      location: "3층",
      img: shieldDetail,
      detailImg: shieldDetail,
      background: "#404040",
      color: "black",
    },
    {
      boothName: "아동학과",

      discript: "", //설명
      detailImg: child,
      location: "3층",
      img: child,
      background: "#FCCCBE",
      color: "white",
    },
  ];
  const Nichols = [
    {
      boothName: "연경당", //동아리이름
      clubName: "AllDay",
      discript: "팟타이-9,000원", //설명
      img: foodtruck,
    },
    {
      boothName: "꼬치천국", //동아리이름
      clubName: "AllDay",

      discript: "타코야끼-5,000원", //설명
      img: foodtruck,
    },
    {
      boothName: "에스에이치푸드", //동아리이름
      clubName: "AllDay",

      discript: "탕후루-5,000원", //설명
      img: foodtruck,
    },
    {
      boothName: "오늘은초밥", //동아리이름
      clubName: "AllDay",

      discript: "소고기불초밥-10,000원\n연어초밥-10,000원\n새우초밥-10,000원", //설명
      img: foodtruck,
    },
    {
      boothName: "빨강트럭", //동아리이름
      clubName: "AllDay",

      img: foodtruck,
      discript: "닭강정-8,000~15,000원", //설명
    },
    {
      boothName: "에페스케밥", //동아리이름
      clubName: "AllDay",

      img: foodtruck,
      discript: "케밥-7,000~9,000원\n터키아이스크림-4,000원\n닭꼬치-5,000원", //설명
    },
    {
      boothName: "커피볶는낭만곰", //동아리이름
      clubName: "AllDay",

      img: foodtruck,
      discript: "커피,음료,논알콜칵테일\n4,000~6,500원", //설명
    },
    {
      boothName: "띠아모", //동아리이름
      clubName: "AllDay",

      img: foodtruck,
      discript:
        "츄러스-3,000원\n초코스틱츄러스-5,000\n아이스크림-3,000원\n회오리감자-4,000원\n아이스크림츄러스-5.000원", //설명
    },
    {
      boothName: "고고판다", //동아리이름
      clubName: "Night Only 🌙",
      img: foodtruck,
      discript: "<대운동장>\n\n목살스테이크-10,000원 ", //설명
    },
    {
      boothName: "스트리트텐동", //동아리이름
      clubName: "Night Only 🌙",
      img: foodtruck,
      discript:
        "<대운동장>\n\n텐동-10,000원\n에비텐동-12,000원\n아나고텐동-15,000원", //설명
    },
    {
      boothName: "곱창야시장", //동아리이름
      clubName: "Night Only 🌙",
      img: foodtruck,
      discript: "<대운동장>\n\n야채곱창순대볶음\n13,000~20,000원", //설명
    },
    {
      boothName: "두리곱창", //동아리이름
      clubName: "Night Only 🌙",
      img: foodtruck,
      discript: "<대운동장>\n\n닭발-12,000원\n닭갈비-12,000원\n오돌뼈-12,000원", //설명
    },
  ];

  return { Nichols, Kim, Plaza };
}
export default BoothDetail;
