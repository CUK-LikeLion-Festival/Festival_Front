import TimeTableDetail from "../../../hooks/components/TimeTable/WednesDay/hook";
import { FaArrowRight } from "react-icons/fa";

export default function WednesDayTimeTable() {
  const { wedNight } = TimeTableDetail();
  const clubPerformances = wedNight.filter(
    (item) => item.title === "동아리 공연"
  );
  const opening = wedNight.find((item) => item.title === "오프닝");
  const closing = wedNight.find((item) => item.title === "클로징");

  return (
    <div>
      <div className="w-1/3 sm:w-full">
        <h2 className="text-3xl text-center text-white font-bold sm:text-3xl">
          5/24
        </h2>
        <hr className="border-white border-[1px] my-2 sm:mx-36" />
        <p className="text-white text-center">축제 일정 안내</p>
        <hr className="border-white border-[1px] my-4 sm:mx-7" />

        {opening && (
          <div className="text-white text-center mb-4 sm:mb-5 sm:mx-5 sm:p-2">
            <h3 className="text-3xl font-bold">{opening.title}</h3>
            <p className="text-base">({opening.time})</p>
          </div>
        )}
        <hr className="border-white border-[1px] my-4 sm:mx-7" />
        {clubPerformances.map((item, index) => (
          <div className="flex flex-col items-center mx-10 ">
            <div className="text-white text-center mb-4 sm:mb-5 sm:mx-5 sm:p-2">
              <h3 className="text-3xl font-bold">{item.title}</h3>
              <p className="text-base">({item.time})</p>
            </div>
            <div
              key={index}
              className="bg-[#9C85AD] bg-opacity-60 border-[9px] border-white border-double  grid grid-cols-2 grid-flow-row gap-4 rounded-3xl p-4 mb-4 sm:h-auto sm:mb-5 sm:mx-5 sm:p-2 md:gap-7 md:grid-rows-2 md:grid-flow-row md:items-center"
            >
              {item.description.map((desc, idx) => (
                <p
                  key={idx}
                  className="text-white mb-2 text-xl  sm:text-[16px] sm:mb-1 md:text-base"
                >
                  {desc ? `${idx + 1}. ${desc}` : desc}
                </p>
              ))}
            </div>
          </div>
        ))}
        <hr className="border-white border-[1px] my-4 sm:mx-7" />
        {closing && (
          <div className="text-white text-center mb-10  sm:mb-5 sm:mx-5 sm:p-2">
            <h3 className="text-3xl font-bold">{closing.title}</h3>
            <p p className="text-base">
              ({closing.time})
            </p>
          </div>
        )}

        <div className="flex justify-end items-center">
          <p className="mr-2 text-2xl text-white">옆으로 슬라이드 해주세요</p>
          <FaArrowRight size={42} color="white" />
        </div>
      </div>
    </div>
  );
}
