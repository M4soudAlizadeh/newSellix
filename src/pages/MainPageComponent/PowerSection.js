const PowerSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-28 bg-power-pattern text-whiteBtnBgColor">
      <p className="text-2xl font-extrabold text-center mdMax:text-xl">
        Powering payments for over <b>250,000</b> businesses
      </p>
      <div className="power">
        <img
          src="https://cdn.sellix.io/static/landing/new/main/promise/stripe.svg"
          alt="stripe"
        />
        <img
          src="https://cdn.sellix.io/static/landing/new/main/promise/paypal.svg"
          alt="paypal"
        />
        <img
          src="https://cdn.sellix.io/static/landing/new/main/promise/binance.svg"
          alt="binance"
        />
        <img
          src="https://cdn.sellix.io/static/landing/new/main/promise/usdt.svg"
          alt="usdt"
        />
        <br />
        <img
          src="https://cdn.sellix.io/static/landing/new/main/promise/bitcoin.svg"
          alt="bitcoin"
        />
        <img
          src="https://cdn.sellix.io/static/landing/new/main/promise/nano.svg"
          alt="nano"
        />
        <img
          src="https://cdn.sellix.io/static/landing/new/main/promise/cashapp.svg"
          alt="cashapp"
        />
        <img
          src="https://cdn.sellix.io/static/landing/new/main/promise/ethereum.svg"
          alt="ethereum"
        />
      </div>
      <a href="_" className="font-medium ">
        and many more...
      </a>
    </div>
  );
};
export default PowerSection;
