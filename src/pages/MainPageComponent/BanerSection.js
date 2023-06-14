import star from "../../assets/star.png";

const BanerSection = () => {
  return (
    <div className="banerAndapp">
      <div className="banerAndappDetail">
        <span className="banerAndappDetail-span text-[88px] whitespace-nowrap mdMax:text-center lgMax:text-7xl mdMax:!text-[40px] mdMax:!leading-[48px]">
          Digital selling
          <br /> with ease
        </span>
        <p className="banerAndappDetail-p">
          Sell subscriptions, tokens, serial keys, digital downloads, video
          courses, softwares and licenses in a fast, easy and secure way.
        </p>
        <div className="mb-10 md:mb-5 sm:mb-2">
          <button className="btnBody btnBlack">
            Get Started
            <i className="ml-2 fa fa-arrow-right"></i>
          </button>
          <button className="btnBody btnWhite">
            Pricing
            <i className="ml-2 fa fa-arrow-right"></i>
          </button>
        </div>
        <div className="pl-4 mt-12 mdMax:mt-8">
          <span className="flex items-center mdMax:justify-center mdMax:text-sm mdMax:font-semibold">
            Excellent
            <img className="ml-3 " src={star} alt="score img" />
          </span>
        </div>
      </div>
      <div className="w-[49%] mdMax:h-[450px]">
        <img
          className="banerAndappImg w-[975px] "
          src="https://cdn.sellix.io/static/landing/new/main/top-screen.png"
          alt="digital banner"
          loading="lazy"
        />
      </div>
    </div>
  );
};
export default BanerSection;
