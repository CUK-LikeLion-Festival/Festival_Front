import { useEffect } from "react";
import Banner from "../../assets/cuk_festival.png";
import JSConfetti from "js-confetti";

const BannerImg = () => {
  useEffect(() => {
    const jsConfetti = new JSConfetti({
      startVelocity: 50, // Set initial velocity to a positive value
      angle: 0, // Set angle to 90 degrees (straight up)
      spread: 360, // Spread particles in all directions
      elementCount: 50, // Number of particles to create
    });
    jsConfetti.addConfetti();
  }, []);
  return (
    <div className="flex justify-center items-cente mt-10 h-5/6 opacity-70">
      <img
        src={Banner}
        alt="Banner"
        className="object-contain max-w-full max-h-full"
      />
    </div>
  );
};

export default BannerImg;
