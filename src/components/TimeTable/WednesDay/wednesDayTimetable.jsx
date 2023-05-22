import TimeTableDetail from "../../../hooks/components/TimeTable/WednesDay/hook";
import { FaArrowRight } from "react-icons/fa";

export default function WednesDayTimeTable() {
  const { wedNight } = TimeTableDetail();

  return (
    <div>
      <div className="w-1/3 sm:w-full ">
        <hr className="border-white border-[1px] my-4 sm:mx-7" />
        <h2 className="text-3xl text-center text-white font-bold mb-4 sm:text-3xl">
          5/24
        </h2>
        <hr className="border-white border-[1px] my-4 sm:mx-7" />
        {wedNight.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-3xl p-4 mb-4 sm:h-auto sm:mb-5 sm:mx-5 sm:p-2 `}
          >
            <h3 className="text-xl font-bold mb-2 text-center text-blue-400 sm:text-[18px] sm:mb-0">
              {item.title}
            </h3>
            <p className=" text-lg mb-2 text-center sm:text-[16px] sm:mb-0">
              ({item.time})
            </p>

            {item.description.map((desc, idx) => (
              <p
                key={idx}
                className={`list-disc mb-2 font-bold sm:text-[15px] sm:font-semibold sm:mb-1`}
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
