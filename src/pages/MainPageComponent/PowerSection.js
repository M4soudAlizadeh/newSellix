import classes from "./PowerSection.module.css";

const PowerSection = () => {
  return (
    <div className={classes["MainPage__PowerSection"]}>
      <p>
        Powering payments for over <b>250,000</b> businesses
      </p>
      <div>
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
      <a href="_">and many more...</a>
    </div>
  );
};
export default PowerSection;
