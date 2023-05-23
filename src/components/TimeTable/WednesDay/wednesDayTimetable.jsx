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
        <h2 className="text-3xl text-center text-white font-bold sm:text-2xl">
          5/24
        </h2>
        <hr className="border-white border-[1px] my-2 sm:mx-36 xl:mx-48" />
        <p className="text-white text-center sm:text-sm">축제 일정 안내</p>
        <hr className="border-white border-[1px] my-4 sm:mx-7 sm:my-1" />

        {opening && (
          <div className="text-white text-center mb-4 sm:mb-5 sm:mx-5 sm:p-2">
            <h3 className="text-3xl font-bold sm:text-2xl">{opening.title}</h3>
            <p className="text-base sm:text-sm">({opening.time})</p>
          </div>
        )}
        <hr className="border-white border-[1px] my-4 sm:mx-7 sm:my-0" />
        {clubPerformances.map((item, index) => (
          <div className="flex flex-col items-center mx-10 ">
            <div className="text-white text-center mb-4 sm:mb-0 sm:mx-5 sm:p-2">
              <h3 className="text-3xl font-bold sm:text-2xl">{item.title}</h3>
              <p className="text-base sm:text-sm">({item.time})</p>
            </div>
            <div
              key={index}
              className="bg-[#9C85AD] bg-opacity-60 border-[7px] border-white border-double  grid grid-cols-2 grid-flow-row gap-4 sm:gap-2 rounded-3xl p-4 mb-4 sm:h-auto sm:mb-5 sm:mx-5 sm:p-2 md:gap-7 md:grid-rows-2 md:grid-flow-row md:items-center"
            >
              {item.description.map((desc, idx) => (
                <p
                  key={idx}
                  className="text-white mb-2 text-xl  sm:text-[14px] sm:mb-0 md:text-base"
                >
                  {desc ? `${idx + 1}. ${desc}` : desc}
                </p>
              ))}
            </div>
          </div>
        ))}
        <hr className="border-white border-[1px] my-4 sm:mx-7 sm:my-0" />
        {closing && (
          <div className="text-white text-center mb-10  sm:mb-5 sm:mx-5 sm:p-2">
            <h3 className="text-3xl font-bold sm:text-2xl">{closing.title}</h3>
            <p p className="text-base sm:text-sm">
              ({closing.time})
            </p>
          </div>
        )}

        <div className="flex justify-end items-center">
          <p className="mr-2 text-2xl text-white sm:text-xl">
            옆으로 슬라이드 해주세요
          </p>

          <FaArrowRight size={42} color="white" />
        </div>
      </div>
    </div>
  );
}
