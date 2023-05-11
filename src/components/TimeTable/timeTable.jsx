import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WednesDay_Day from "../../assets/TimeTable/Wednesday_day.jpg";
import WednesDay_Night from "../../assets/TimeTable/Wednesday.jpg";
import ThursDay_Day from "../../assets/TimeTable/Thursday.jpg";

const TimeTable = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div className="mt-24 sm:mt-24 overflow-hidden">
      <Slider {...settings}>
        <div className="ml-[580px] sm:ml-0">
          <h2 className="text-5xl sm:text-2xl font-bold my-5 ">
            수요일 길거리
          </h2>
          <img src={WednesDay_Day} alt="WednesDay_Day" />
        </div>
        <div className="ml-[580px] sm:ml-0">
          <h2 className="text-5xl sm:text-2xl font-bold my-5 ">수요일</h2>
          <img src={WednesDay_Night} alt="WednesDay_Night" />
        </div>
        <div className="ml-[580px] sm:ml-0">
          <h2 className="text-5xl sm:text-2xl font-bold my-5">목요일</h2>
          <img src={ThursDay_Day} alt="WednesDay_Night" />
        </div>
      </Slider>
    </div>
  );
};

export default TimeTable;
