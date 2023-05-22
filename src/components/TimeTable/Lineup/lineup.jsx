import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spider from "../../../assets/LineUp/spider.webp";
import Gray from "../../../assets/LineUp/gray.webp";
import GiantT from "../../../assets/LineUp/giant.webp";
import Slider from "react-slick";
import Lion from "../../../assets/가대멋사로고.svg";

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
      <div className="flex justify-start mt-10 sm:mt-0 ">
        <img
          src={Lion}
          alt="Lion"
          className={`object-contain w-8 opacity-50 h-auto `}
        />
      </div>
      <div className="w-1/3 ml-[500px] sm:ml-[45px] sm:w-4/5 sm:mt-40 md:ml-[220px] md:mt-56">
        <h2 className="text-4xl text-center mb-2">축제 라인업</h2>
        <Slider {...settings}>
          <img src={Spider} alt="Banner" className="rounded-3xl" />
          <img src={Gray} alt="Banner" className="rounded-3xl" />
          <img src={GiantT} alt="Banner" className="rounded-3xl" />
        </Slider>
      </div>
    </div>
  );
}
