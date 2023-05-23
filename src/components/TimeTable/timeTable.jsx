import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WednesDayTimeTable from "./WednesDay/wednesDayTimetable";
import LineUp from "./Lineup/lineup";
import ThursDayNight from "./ThursDay/thursDayNight";
import ThursDayDay from "./ThursDay/thursDayDay";

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
    <div>
      <div className="mt-2  overflow-hidden">
        <Slider {...settings}>
          <div className=" ml-[640px] xl:mt-[50px] sm:ml-0 md:ml-[300px] md:mt-[80px] ">
            <WednesDayTimeTable />
          </div>
          <div className="ml-[640px] xl:mt-[80px] sm:ml-0 md:ml-[300px] md:mt-[80px] ">
            <ThursDayDay />
          </div>
          <div className="ml-[640px] xl:mt-[50px] sm:ml-0 md:ml-[300px] md:mt-[80px] ">
            <ThursDayNight />
          </div>
          <div>
            <LineUp />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TimeTable;
