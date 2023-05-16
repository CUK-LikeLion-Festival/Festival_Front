import React, { useState } from "react";

const bars = [
  
  "이과대",
  "약학대",
  "생과대",
  "더게임",
  "소피바라",
  "더게임",
  "유학생",
  "컴공",
  "정통",
  "바메화공",
  "에환공",
  "철학",
  "사회",
  
 
];

function BarName() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // 주점 이름을 가로로 세 줄로 나누는 로직
  const chunkedBars = Array.from({ length: 3 }, (_, index) =>
    bars.slice(
      index * Math.ceil(bars.length / 3),
      (index + 1) * Math.ceil(bars.length / 3)
    )
  );

  return (
    <div>
      {chunkedBars.map((chunk, rowIndex) => (
        <ul key={rowIndex} className="flex flex-wrap -mb-px">
          {chunk.map((bar, columnIndex) => {
            const index = rowIndex * Math.ceil(bars.length / 3) + columnIndex;
            return (
              <li key={index} className="mr-2">
                <a
                  href="#!"
                  className={`inline-block p-4 border-b-2 ${
                    activeIndex === index
                      ? "border-white"
                      : "border-transparent hover:border-gray-300 dark:hover:border-gray-300"
                  } rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300`}
                  onClick={() => handleClick(index)}
                >
                  {bar}
                </a>
                {activeIndex === index && (
                  <div className="h-1 w-full bg-white"></div>
                )}
              </li>
            );
          })}
          {chunk.length < Math.ceil(bars.length / 3) && (
            <li className="mr-2">
              <div className="inline-block p-4 border-b-2 border-transparent rounded-t-lg"></div>
            </li>
          )}
        </ul>
      ))}
    </div>
  );
}

export default BarName;