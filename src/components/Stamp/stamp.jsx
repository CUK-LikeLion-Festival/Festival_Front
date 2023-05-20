import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import StampMain from "../../assets/Stamp/StampMain.png";
import StampMap from "../../assets/Stamp/StampMap.png";
import StampDetail from "../../hooks/components/Stamp/hook";

export default function Stamp() {
  const { data } = StampDetail();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div className="ml-5 sm:ml-1 md:ml-1">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="text-5xl text-red-700 sm:text-4xl"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
      <div className="flex justify-center my-10 text-5xl font-bold sm:text-3xl sm:my-20">
        <h2>{data.title}</h2>
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
