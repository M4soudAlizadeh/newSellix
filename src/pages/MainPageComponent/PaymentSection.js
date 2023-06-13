import classes from "./PaymentSection.module.css";
const PaymentSection = () => {
  return (
    <div className={classes["MainPage__PaymentCrypto"]}>
      <div className={classes["MainPage__PaymentCrypto--title"]}>
        <h1>Payments</h1>
        <p>
          Straightforward revenue collection. Integrate a gateway and collect
          earnings directly in your bank account, or crypto wallet.
        </p>
        <div className={classes["MainPage__PaymentCrypto--title-package"]}>
          <a href="_">
            <i class="fa fa-id-card-alt"></i>
            <h2>Crypto</h2>
            <p>
              Utilize our built-in crypto infrastructure. Support for BTC, ETH,
              LTC, USDT, USDC & more.
            </p>
          </a>
          <a href="_">
            <i class="fa fa-id-card-alt"></i>
            <h2>Fees</h2>
            <p>
              Unlike other popular platforms, Sellix takes the lowest fees in
              comparison — by a longshot.
            </p>
          </a>
          <a href="_">
            <i class="fa fa-id-card-alt"></i>
            <h2>Gateways</h2>
            <p>
              Sell globally with PayPal, Stripe, CashApp, and 12+ other popular
              gateways.
            </p>
          </a>
          <a href="_">
            <i class="fa fa-id-card-alt"></i>
            <h2>Payouts</h2>
            <p>
              We’ll do the math and hard work for you. All with a simple,
              easy-to-read report.
            </p>
          </a>
        </div>
      </div>
      <img
        src="https://cdn.sellix.io/static/landing/new/main/payments-pic.png"
        alt="payment img"
      />
    </div>
  );
};
export default PaymentSection;
