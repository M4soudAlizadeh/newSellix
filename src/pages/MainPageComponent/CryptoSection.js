const CryptoSection = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-28 mdMax:mt-10">
      <img
        className="my-auto mb-12 mdMax:mb-6"
        src="https://cdn.sellix.io/static/landing/new/main/crypto.svg"
        alt="crypto label"
      />
      <span className=" text-[40px] font-extrabold leading-[48px] not-italic mdMax:text-2xl mdMax:leading-8">
        Cryptocurrency Transactions
      </span>
      <p className="w-1/2 text-lg leading-7 mt-7 mb-9 mdMax:w-full mdMax:mt-3 mdMax:text-[15px] mdMax:leading-[22px] mdMax:mb-6">
        Sellix provides you with the latest technologies, offering you a simple
        solution to sell your digital goods with cryptocurrencies
      </p>
      <button className="btnWhiteBaner">
        View Fees<i className="ml-2x fa fa-arrow-right"></i>
      </button>
    </div>
  );
};
export default CryptoSection;
