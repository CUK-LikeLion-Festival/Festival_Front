import StampMain from "../../assets/Stamp/StampMain.png";
import StampMap from "../../assets/Stamp/StampMap.png";

export default function Stamp() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center my-10 text-5xl font-bold sm:text-3xl sm:my-20">
        <h2>스탬프 투어 & 협찬 안내</h2>
      </div>
      <div className="flex flex-row justify-center sm:flex-col md:flex-col ">
        <img
          src={StampMain}
          alt="StampMain"
          className={`object-contain w-1/3 h-1/3 sm:w-full sm:mb-5 md:w-full md:mb-5`}
        />
        <img
          src={StampMap}
          alt="StampMap"
          className={`object-contain w-1/3 h-1/3 sm:w-full sm:mb-5 md:w-full md:mb-5`}
        />
      </div>
    </div>
  );
}
