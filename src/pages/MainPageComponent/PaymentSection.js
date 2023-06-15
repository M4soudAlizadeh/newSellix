const PaymentSection = () => {
  return (
    <div className="flex-row fourComponentContainer">
      <div className="fourComponentContainer_deatailCont">
        <div>Payments</div>
        <p>
          Straightforward revenue collection. Integrate a gateway and collect
          earnings directly in your bank account, or crypto wallet.
        </p>
        <div className="fourComponentContainer-itemsContainer">
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
      <div className="fourComponentContainer-imgs">
        <img
          className="right-60 fourComponentContainer-imgs_first left-1/2"
          src="https://cdn.sellix.io/static/landing/new/main/payments-back.svg"
          alt="two payment img"
        />
        <img
          className="fourComponentContainer-imgs_sec"
          src="https://cdn.sellix.io/static/landing/new/main/payments-pic.png"
          alt="payment img"
        />
      </div>
    </div>
  );
};
export default PaymentSection;
