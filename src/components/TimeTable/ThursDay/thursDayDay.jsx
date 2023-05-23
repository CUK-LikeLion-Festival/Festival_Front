import ThursDayTimeTableDetail from "../../../hooks/components/TimeTable/ThursDay/hook";
import { FaArrowRight } from "react-icons/fa";

export default function ThursDayDay() {
  const { ThursDay } = ThursDayTimeTableDetail();

  return (
    <div>
      <div className="w-1/3 sm:w-full">
        <h2 className="text-3xl text-center text-white font-bold sm:text-2xl">
          5/25 Day
        </h2>
        <hr className="border-white border-[1px] my-2 sm:mx-28 xl:mx-24" />

        {ThursDay.map((item, index) => (
          <div
            key={index}
            className="text-white text-center mb-4 sm:my-5  sm:mx-5 sm:p-2"
          >
            <h3 className="text-3xl font-bold sm:text-2xl">{item.title}</h3>
            <p className="text-base sm:text-sm">({item.time})</p>
            <hr className="border-white border-[1px] my-4 sm:mt-2 sm:my-2  sm:mx-7" />
          </div>
        ))}
        <div className="flex justify-end items-center">
          <p className="mr-2 text-2xl text-white sm:text-xl">
            옆으로 슬라이드 해주세요
          </p>
          <FaArrowRight size={38} color="white" />
        </div>
      </div>
    </div>
  );
}
