import ThursDayTimeTableDetail from "../../../hooks/components/TimeTable/ThursDay/hook";

export default function ThursDayNight() {
  const { ThursNight } = ThursDayTimeTableDetail();

  const clubPerformances = ThursNight.filter(
    (item) => item.title === "동아리 공연"
  );
  const influencer1 = ThursNight.filter(
    (item) => item.title === "연예인 공연1"
  );
  const gift = ThursNight.find((item) => item.title === "가대 시그널");

  const influencer2 = ThursNight.filter(
    (item) => item.title === "연예인 공연2"
  );

  return (
    <div>
      <div className="w-1/3 sm:w-full">
        <h2 className="text-3xl text-center text-white font-bold sm:text-2xl">
          5/25 Night
        </h2>
        <hr className="border-white border-[1px] my-2 sm:mx-36 sm:my-1 xl:mx-48" />
        <p className="text-white text-center sm:text-sm">축제 일정 안내</p>
        <hr className="border-white border-[1px] my-4 sm:mx-7" />
        {clubPerformances.map((item, index) => (
          <div className="flex flex-col items-center mx-10 ">
            <div className="text-white text-center mb-4 sm:mb-2 sm:mx-5 sm:p-2">
              <h3 className="text-3xl font-bold sm:text-2xl">{item.title}</h3>
              <p className="text-base sm:text-sm">({item.time})</p>
            </div>
            <div
              key={index}
              className="bg-[#9C85AD] bg-opacity-60 border-[3px] border-white border-double  grid grid-cols-2 grid-flow-row gap-4 rounded-3xl p-4 mb-4 sm:h-auto sm:mb-2 sm:mx-5 sm:p-2 md:gap-7 md:grid-rows-2 md:grid-flow-row md:items-center"
            >
              {item.description.map((desc, idx) => (
                <p
                  key={idx}
                  className="text-white mb-2 text-xl   sm:text-[14px] sm:mb-1 md:text-base"
                >
                  {desc ? `${idx + 1}. ${desc}` : desc}
                </p>
              ))}
            </div>
          </div>
        ))}
        <hr className="border-white border-[1px] my-2 sm:mx-7" />
        {influencer1.map((item, index) => (
          <div className="flex flex-col items-center mx-10 ">
            <div className="text-white text-center mb-4 sm:mb-2 sm:mx-5 sm:p-2">
              <h3 className="text-3xl font-bold sm:text-2xl">{item.title}</h3>
              <p className="text-base sm:text-xs">({item.time})</p>
            </div>
            <div
              key={index}
              className="bg-[#9C85AD] bg-opacity-60 border-[3px] border-white border-double  grid grid-cols-2 grid-flow-row gap-4 rounded-3xl p-4 mb-4 sm:h-auto sm:mb-2 sm:mx-5 sm:p-2 md:gap-7 md:grid-rows-2 md:grid-flow-row md:items-center"
            >
              {item.description.map((desc, idx) => (
                <p
                  key={idx}
                  className="text-white mb-2 text-xl  sm:text-[14px] sm:mx-2 sm:rounded-sm sm:mb-1 md:text-base"
                >
                  {desc ? `${idx + 1}. ${desc}` : desc}
                </p>
              ))}
            </div>
          </div>
        ))}
        <hr className="border-white border-[1px] my-2 sm:mx-7" />
        {gift && (
          <div className="text-white text-center mb-4 sm:mb-2 sm:mx-5 sm:p-2">
            <h3 className="text-3xl font-bold sm:text-2xl">{gift.title}</h3>
            <p className="text-base sm:text-sm">({gift.time})</p>
          </div>
        )}
        <hr className="border-white border-[1px] my-2 sm:mx-7" />
        {influencer2.map((item, index) => (
          <div className="flex flex-col items-center mx-10 ">
            <div className="text-white text-center mb-4 sm:mb-2 sm:mx-5 sm:p-2 ">
              <h3 className="text-3xl font-bold sm:text-2xl">{item.title}</h3>
              <p className="text-base sm:text-sm">({item.time})</p>
            </div>
            <div
              key={index}
              className="bg-[#9C85AD] bg-opacity-60 border-[3px] border-white border-double  grid grid-cols-2 grid-flow-row gap-4 rounded-3xl p-4 mb-4 sm:h-auto sm:mb-2 sm:mx-5 sm:p-0  sm:rounded-3xl md:gap-7 md:grid-rows-2 md:grid-flow-row md:items-center"
            >
              {item.description.map((desc, idx) => (
                <p
                  key={idx}
                  className="text-white mb-2 text-xl  sm:text-[14px] sm:mb-1 sm:ml-2 md:text-base"
                >
                  {desc ? `${idx + 1}. ${desc}` : desc}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
