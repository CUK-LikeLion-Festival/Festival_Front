import ThursDayTimeTableDetail from "../../../hooks/components/TimeTable/ThursDay/hook";
import { FaArrowRight } from "react-icons/fa";

export default function ThursDayTimeTable() {
  const { ThursDay, ThursNight } = ThursDayTimeTableDetail();

  return (
    <div className="flex space-x-20 sm:mx-3 sm:space-x-5">
      <div className="w-96 ">
        <h2 className="text-3xl text-center font-bold mb-4 sm:text-lg">
          5/25 낮
        </h2>
        {ThursDay.map((item, index) => (
          <div key={index} className="bg-white rounded-3xl p-4 mb-4 sm:mb-5">
            <div className="flex flex-col justify-center items-center">
              <p className="text-lg sm:text-[14px] sm:mb-0">{item.time}</p>
              <h3 className="text-xl font-bold mb-5 text-blue-400 sm:text-[14px] sm:mb-0">
                {item.title}
              </h3>
            </div>

            {item.description.map((desc, idx) => (
              <p
                key={idx}
                className="list-disc font-bold sm:text-[12px] sm:font-semibold sm:mb-1"
              >
                {desc ? `${idx + 1}. ${desc}` : desc}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="w-96">
        <h2 className="text-3xl text-center font-bold mb-4 sm:text-lg">
          5/25 밤
        </h2>
        {ThursNight.map((item, index) => (
          <div key={index} className="bg-white rounded-3xl p-4 mb-4 sm:mb-5">
            <div className="flex flex-col xl:mb-2 justify-center items-center">
              <p className="text-lg mb-2 sm:text-[14px] sm:mb-0">{item.time}</p>
              <h3 className="text-xl font-bold mb-2 text-blue-400 sm:text-[12px] sm:mb-1">
                {item.title}
              </h3>
            </div>
            {item.description.map((desc, idx) => (
              <p
                key={idx}
                className="list-disc font-bold sm:text-[12px] sm:mb-1"
              >
                {desc ? `${idx + 1}. ${desc}` : desc}
              </p>
            ))}
          </div>
        ))}
        <div className="flex justify-end items-center">
          <p className="mr-2 font-semibold text-white">옆으로 넘기세요</p>

          <FaArrowRight size={42} color="white" />
        </div>
      </div>
    </div>
  );
}
