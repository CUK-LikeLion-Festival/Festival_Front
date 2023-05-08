import WednesDay_Day from "../../assets/TimeTable/Wednesday_day.jpg";
import WednesDay_Night from "../../assets/TimeTable/Wednesday.jpg";

const Wednesday = () => {
  return (
    <div>
      <h2 className="text-5xl sm:text-2xl font-bold my-5 flex justify-center items-center">
        수요일
      </h2>
      <div className="flex flex-row justify-center items-center mt-10 sm:flex-col">
        <div className="w-1/2 flex justify-center ml-28 sm:w-2/3 sm:h-1/2 sm:ml-0 sm:mb-5">
          <img
            src={WednesDay_Day}
            alt="WednesDay_Day"
            className="object-contain max-w-full max-h-full "
          />
        </div>
        <div className="h-96 border-[2px] border-dotted border-black mx-10 sm:h-0 sm:w-full sm:mb-5 "></div>
        <div className="w-1/2 flex justify-center mr-28 sm:w-2/3 sm:h-1/2 sm:mr-0">
          <img
            src={WednesDay_Night}
            alt="WednesDay_Night"
            className="object-contain max-w-full max-h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Wednesday;
