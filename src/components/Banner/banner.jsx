import { useEffect, useRef } from "react";
import Banner from "../../assets/cuk_back.png";
import JSConfetti from "js-confetti";
import Lion from "../../assets/가대멋사로고.svg";
import CUK from "../../assets/cuk.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FaAngleDoubleDown } from "react-icons/fa";

const BannerImg = () => {
  const text = "가톨릭대학교 멋쟁이 사자처럼 X 아우름제 중앙축제운영단";

  const scrollButtonRef = useRef(null);

  useEffect(() => {
    const scrollButton = scrollButtonRef.current;

    const scrollPage = () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    };

    scrollButton.addEventListener("click", scrollPage);

    return () => {
      scrollButton.removeEventListener("click", scrollPage);
    };
  }, []);

  useEffect(() => {
    const jsConfetti = new JSConfetti({
      startVelocity: 50,
      angle: 0,
      spread: 360,
      elementCount: 50,
    });
    jsConfetti.addConfetti();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-10 h-5/6 ">
      <div className="flex flex-row mt-10 sm:mt-0 sm:space-x-7 space-x-16">
        <img src={Lion} alt="Lion" className={`object-contain w-20 h-20 `} />
        {/* <p className="flex justify-center text-2xl items-center mx-2 text-white">
          <FontAwesomeIcon icon={faTimes} />
        </p> */}
        <img src={CUK} alt="cuk" className={`object-contain w-20 h-20 `} />
      </div>
      <div className="my-2 sm:my-0 sm:ml-5 flex flex-row">
        <p className="font-[LOTTERIADDAG] text-white text-2xl sm:text-sm">
          가톨릭대학교
          <br /> 멋쟁이 사자처럼
        </p>
        <p className="mx-1 flex font-[LOTTERIADDAG] text-white text-2xl sm:text-2xl justify-center items-center text-center">
          <FontAwesomeIcon icon={faTimes} />
        </p>
        <p className="font-[LOTTERIADDAG] text-white text-2xl sm:text-sm">
          아우름제
          <br /> 중앙축제운영단
        </p>
      </div>
      <img
        src={Banner}
        alt="Banner"
        className={`mt-2 object-contain rounded-t-[200px] sm:rounded-t-[100px] sm:rounded-b-[70px] max-w-full max-h-full transition-opacity duration-1000 hover:opacity-40 hover:border-2 hover:border-black`}
      />
      <div className="text-center mt-10 lg:hidden xl:hidden">
        <button
          ref={scrollButtonRef}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
          <FaAngleDoubleDown color="white" size={40} />
        </button>
      </div>
    </div>
  );
};

export default BannerImg;
