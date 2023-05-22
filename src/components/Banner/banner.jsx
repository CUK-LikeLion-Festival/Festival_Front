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
  const letters = text.split("");

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
      <div className="flex flex-row mt-10 sm:mt-0">
        <img src={Lion} alt="Lion" className={`object-contain w-20 h-20 `} />
        <p className="flex justify-center text-2xl items-center mx-2 text-black">
          <FontAwesomeIcon icon={faTimes} />
        </p>
        <img src={CUK} alt="cuk" className={`object-contain w-20 h-20 `} />
      </div>
      <div className="my-2 sm:my-0">
        <p className="text-black text-2xl sm:text-sm">
          {letters.map((letter, index) => (
            <span className={`text-${getColor(index)}-400`} key={index}>
              {letter}
            </span>
          ))}
        </p>
      </div>
      <img
        src={Banner}
        alt="Banner"
        className={`mt-2 object-contain rounded-t-[200px] sm:rounded-t-[100px] sm:rounded-b-[70px] max-w-full max-h-full transition-opacity duration-1000 hover:opacity-40 hover:border-2 hover:border-black`}
      />
      <div className="text-center mt-24 lg:hidden xl:hidden">
        <button
          ref={scrollButtonRef}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
          <FaAngleDoubleDown color="red" size={40} />
        </button>
      </div>
    </div>
  );
};

const getColor = (index) => {
  const colors = ["red", "blue"];

  return colors[index % colors.length];
};

export default BannerImg;
