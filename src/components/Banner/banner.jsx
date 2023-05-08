import Banner from "../../assets/cuk_festival.png";

const BannerImg = () => {
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
