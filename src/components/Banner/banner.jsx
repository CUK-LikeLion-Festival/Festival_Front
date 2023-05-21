import { useEffect } from "react";
import Banner from "../../assets/cuk_back.png";
import JSConfetti from "js-confetti";

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
    <div className="flex justify-center items-center h-full sm:justify-start">
      <img
        src={Banner}
        alt="Banner"
        className={`object-contain max-w-full max-h-full transition-opacity duration-1000 hover:opacity-40`}
      />
    </div>
  );
};

export default BannerImg;
