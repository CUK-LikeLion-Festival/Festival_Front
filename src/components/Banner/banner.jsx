import { useEffect } from "react";
import Banner from "../../assets/cuk_back.png";
import JSConfetti from "js-confetti";
import Lion from "../../assets/가대멋사로고.svg";
import CUK from "../../assets/cuk.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const BannerImg = () => {
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
      <div className="flex flex-row mt-5 sm:mt-0">
        <img src={Lion} alt="Lion" className={`object-contain w-20 h-20 `} />
        <p className="flex justify-center text-2xl items-center mx-2 text-black">
          <FontAwesomeIcon icon={faTimes} />
        </p>
        <img src={CUK} alt="cuk" className={`object-contain w-20 h-20 `} />
      </div>
      <div className="my-2 sm:my-0">
        <p className="sm:text-sm">
          가톨릭대학교 멋쟁이 사자처럼 X 가톨릭대학교 축제 위원회
        </p>
      </div>
      <img
        src={Banner}
        alt="Banner"
        className={`object-contain max-w-full max-h-full transition-opacity duration-1000 hover:opacity-40`}
      />
    </div>
  );
};

export default BannerImg;
