import ThursDayTimeTableDetail from "../../../hooks/components/TimeTable/ThursDay/hook";

export default function ThursDayTimeTable() {
  const { ThursNight } = ThursDayTimeTableDetail();

  return (
    <div>
      <div className="w-1/3 sm:w-full ">
        <h2 className="text-xl text-center font-bold mb-4">목요일</h2>
        {ThursNight.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-3xl p-4 mb-4 sm:h-auto sm:mb-2 sm:mx-5 sm:p-2 `}
          >
            <p className="text-lg mb-2 text-center sm:text-[12px] sm:mb-0">
              {item.time}
            </p>
            <h3 className="text-xl font-bold mb-2 text-center sm:text-[12px] sm:mb-0">
              {item.title}
            </h3>

            {item.description.map((desc, idx) => (
              <p
                key={idx}
                className={`list-disc mb-2 font-bold sm:text-[12px] sm:font-semibold`}
              >
                {desc ? `${idx + 1}. ${desc}` : desc}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
