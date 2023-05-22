import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spider from "../../../assets/LineUp/spider.webp";
import Gray from "../../../assets/LineUp/gray.webp";
import GiantT from "../../../assets/LineUp/giant.webp";
import Slider from "react-slick";

export default function LineUp() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <div className="w-1/3 ml-[500px] sm:ml-[45px] sm:w-4/5 sm:mt-40 md:ml-[220px] md:mt-56">
        <h2 className="text-4xl text-white text-center mb-2">축제 라인업</h2>
        <Slider {...settings}>
          <img
            src={Spider}
            alt="Banner"
            className="rounded-[100px] border-[4px] border-black border-solid"
          />
          <img
            src={Gray}
            alt="Banner"
            className="rounded-[100px] border-[4px] border-black border-solid "
          />
          <img
            src={GiantT}
            alt="Banner"
            className="rounded-[100px] border-[4px] border-black border-solid"
          />
        </Slider>
      </div>
    </div>
  );
}
