const AppSection = () => {
  return (
    <div className="banerAndapp">
      <div className="banerAndappDetail">
        <span className="banerAndappDetail-span text-[40px] leading-[48px] mdMax:!text-[24px] mdMax:!leading-[32px]">
          Introducing Sellix Business for iOS & Android
        </span>
        <p className="banerAndappDetail-p">
          Sellix is now available to be downloaded on mobile devices around the
          world on the App & Play Stores.
        </p>
        <div className="mt-10 md:mt-5 sm:mt-0">
          <button className="mb-5 btnBody btnBlack">
            <i className="mr-2 fa fa-apple"></i>
            App Store
          </button>
          <button className="btnBody btnBlack">
            <i className="fab fa-google-play"></i>
            Google Play
          </button>
        </div>
      </div>
      <div className="w-[49%] mdMax:h-[20px] mdMax:w-full">
        <img
          className="banerAndappImg right-10 lgMax2:max-w-[400px] mdMax:!max-w-[300px] mdMax:static mdMax:mx-auto"
          src="https://cdn.sellix.io/static/landing/new/main/mobile-device.svg"
          alt="mobile app"
        />
      </div>
    </div>
  );
};
export default AppSection;
