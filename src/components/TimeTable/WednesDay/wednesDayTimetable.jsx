import TimeTableDetail from "../../../hooks/components/TimeTable/WednesDay/hook";

export default function WednesDayTimeTable() {
  const { wedDay, wedNight } = TimeTableDetail();

  return (
    <div className="flex space-x-20 sm:mx-3">
      <div className="w-96 ">
        <h2 className="text-xl text-center font-bold mb-4 sm:text-lg">
          수요일 낮
        </h2>
        {wedDay.map((item, index) => (
          <div key={index} className="bg-white rounded-3xl p-4 mb-4 ">
            <p className="text-lg mb-2 sm:text-[12px] sm:mb-0">{item.time}</p>
            <h3 className="text-xl font-bold mb-2 sm:text-[12px] sm:mb-0">
              {item.title}
            </h3>

            {item.description.map((desc, idx) => (
              <p
                key={idx}
                className="list-disc font-bold sm:text-[12px] sm:font-semibold"
              >
                {idx + 1}. {desc}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="w-96">
        <h2 className="text-xl text-center font-bold mb-4 sm:text-lg">
          수요일 밤
        </h2>
        {wedNight.map((item, index) => (
          <div key={index} className="bg-white rounded-3xl p-4 mb-4">
            <p className="text-lg mb-2 sm:text-[12px] sm:mb-0">{item.time}</p>
            <h3 className="text-xl font-bold mb-2 sm:text-[12px] sm:mb-0">
              {item.title}
            </h3>
            {item.description.map((desc, idx) => (
              <p key={idx} className="list-disc font-bold sm:text-[12px]">
                {desc ? `${idx + 1}. ${desc}` : desc}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
