import jaksim from "../../../assets/Sponser/작심랩.jpg";
import chika from "../../../assets/Sponser/치카면.png";
import milk from "../../../assets/Sponser/우유꽉.png";
import gudoro from "../../../assets/Sponser/구도로.jpg";
import beer from "../../../assets/Sponser/인쌩맥주.jpg";
import chunji from "../../../assets/Sponser/천지개벽.jpg";

function SponserDetail() {
  const data = [
    {
      boothName: "작심랩 콤부차",
      discript: "8종 20set 160개", //설명
      img: jaksim,
      background: "#1F85DA",
      color: "white",
    },
    {
      boothName: "치카면",
      discript: "", //설명
      img: chika,
      background: "#BB1D21",
      color: "white",
    },
    {
      boothName: "천지개벽",
      discript: "숙취해소제 400병 제주 한라봉 스파클링 240캔", //설명
      img: chunji,
    },
    {
      boothName: "우유꽉",
      discript: "로얄, 얼그레이, 초코밀크티 20% 할인판매", //설명
      img: milk,
      background: "#FEF4C3",
      color: "black",
    },
    {
      boothName: "구도로통닭",
      discript: "3만원 이상 결제 = 3%할인, 5만원 이상 결제 = 10%할인", //설명
      img: gudoro,
      background: "#07192D",
      color: "white",
    },
    {
      boothName: "인쌩맥주",
      discript:
        "4만원 이상 주문봉알주/쌕쌕주/포도소주/홍차주中서비스 택17만원 이상 주문파인애플 빙수 10만원 이상 주문 하이볼 인원수대로 제공", //설명
      img: beer,
      background: "#010101",
      color: "#FFB749",
    },
  ];
  return { data };
}

export default SponserDetail;
