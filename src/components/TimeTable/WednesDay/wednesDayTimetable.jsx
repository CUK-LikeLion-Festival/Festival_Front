import TimeTableDetail from "../../../hooks/components/TimeTable/WednesDay/hook";
import { FaArrowRight } from "react-icons/fa";
export default function WednesDayTimeTable() {
  const { wedNight } = TimeTableDetail();

  return (
    <div>
      <div className="w-1/3 sm:w-full ">
        <h2 className="text-3xl text-center font-bold mb-4">5/24</h2>
        {wedNight.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-3xl p-4 mb-4 sm:h-auto sm:mb-2 sm:mx-5 sm:p-2 `}
          >
            <p className="text-lg mb-2 text-center sm:text-[8px] sm:mb-0">
              {item.time}
            </p>
            <h3 className="text-xl font-bold mb-2 text-center text-blue-400 sm:text-[12px] sm:mb-0">
              {item.title}
            </h3>

            {item.description.map((desc, idx) => (
              <p
                key={idx}
                className={`list-disc mb-2 font-bold sm:text-[4px] sm:font-semibold sm:mb-1`}
              >
                {desc ? `${idx + 1}. ${desc}` : desc}
              </p>
            ))}
          </div>
        ))}
        <div className="flex justify-end items-center">
          <p className="mr-2 font-semibold text-blue-200">옆으로 넘기세요</p>

          <FaArrowRight size={42} color="red" />
        </div>
      </div>
    </div>
  );
}
