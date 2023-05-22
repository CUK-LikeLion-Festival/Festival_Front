import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spider from "../../../assets/LineUp/spider.webp";
import Gray from "../../../assets/LineUp/gray.webp";
import GiantT from "../../../assets/LineUp/giant.webp";
import Slider from "react-slick";

export default function LineUp() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <div className="w-1/2 ml-[440px] sm:ml-[65px] sm:w-2/3 sm:mt-40 md:ml-[220px] md:mt-56">
        <h2 className="text-4xl text-center mb-2">축제 라인업</h2>
        <Slider {...settings}>
          <img src={Spider} alt="Banner" />
          <img src={Gray} alt="Banner" />
          <img src={GiantT} alt="Banner" />
        </Slider>
      </div>
    </div>
  );
}
