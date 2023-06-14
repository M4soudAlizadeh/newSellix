import star from "../../assets/star.png";

const BanerSection = () => {
  return (
    <div className="relative flex px-5 overflow-hidden py-36 mdMax:flex-col mdMax:text-center mdMax:pt-20">
      <div className="w-[51%] mdMax:w-full mdMax:mb-14">
        <span className="text-[88px] font-extrabold leading-[106px] whitespace-nowrap z-10 tracking-tighter lgMax:text-7xl mdMax:!text-[40px] mdMax:!leading-[48px] ">
          Digital selling
          <br /> with ease
        </span>
        <p className="text-xl leading-[32px]  mt-5 mb-8 pr-10 flex-wrap mdMax:text-base mdMax:pr-0">
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
          className="w-[975px] absolute top-20 -z-10 mdMax:top-auto smMax:max-w-[790px]"
          src="https://cdn.sellix.io/static/landing/new/main/top-screen.png"
          alt="digital banner"
          loading="lazy"
        />
      </div>
    </div>
  );
};
export default BanerSection;
