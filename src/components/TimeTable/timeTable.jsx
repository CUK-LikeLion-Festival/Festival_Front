import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WednesDayTimeTable from "./WednesDay/wednesDayTimetable";
import ThursDayTimeTable from "./ThursDay/thursDayTimeTable";
import LineUp from "./Lineup/lineup";

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
    <div className="mt-10 overflow-hidden">
      <Slider {...settings}>
        <div className=" ml-[640px] xl:mt-[50px] sm:ml-0 md:ml-[300px] md:mt-[80px] ">
          <WednesDayTimeTable />
        </div>
        <div className="ml-[540px] xl:mt-[50px] sm:ml-0  md:ml-[0px] md:mt-[130px] md:px-4">
          <ThursDayTimeTable />
        </div>
        <div>
          <LineUp />
        </div>
      </Slider>
    </div>
  );
};

export default TimeTable;
