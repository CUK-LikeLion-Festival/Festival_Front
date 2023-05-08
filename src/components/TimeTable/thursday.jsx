import ThursDay_Day from "../../assets/TimeTable/Thursday.jpg";

const ThursDay = () => {
  return (
    <div>
      <h2 className="text-4xl sm:text-2xl font-bold my-5 mb-10 flex justify-center items-center">
        목요일
      </h2>
      <div className="flex justify-center items-center my-10 mx-28 sm:mx-0">
        <img
          src={ThursDay_Day}
          alt="ThursDay"
          className="object-contain w-1/2 h-1/2 sm:h-4/5 sm:w-4/5"
        />
      </div>
    </div>
  );
};

export default ThursDay;
