import classes from "./SellSection.module.css";
const SellSection = () => {
  return (
    <div className={classes["MainPage__SellCrypto"]}>
      <img
        src="https://cdn.sellix.io/static/landing/new/main/sell-pic.png"
        alt="sell img"
      />
      <div className={classes["MainPage__SellCrypto--title"]}>
        <h1>Sell</h1>
        <p>
          With everything powered by a single platform, you don’t have to choose
          just one type of digital product.
        </p>
        <div className={classes["MainPage__SellCrypto--title-package"]}>
          <a href="_">
            <i class="fa fa-id-card-alt"></i>
            <h2>Software</h2>
            <p>
              Built for developers and businesses. We’ll host unlimited files up
              to 5GB of cloud storage.
            </p>
          </a>
          <a href="_">
            <i class="fa fa-id-card-alt"></i>
            <h2>Services</h2>
            <p>
              Supercharge your creativity and sell directly through a safe, and
              battle-tested platform.
            </p>
          </a>
          <a href="_">
            <i class="fa fa-id-card-alt"></i>
            <h2>Subscriptions</h2>
            <p>
              If it’s a daily, weekly, monthly, or yearly plan, we support it
              all. All simply integrated.
            </p>
          </a>
          <a href="_">
            <i class="fa fa-id-card-alt"></i>
            <h2>Serials</h2>
            <p>
              Sell accounts, license keys, and activation codes. Save it and
              make cash.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};
export default SellSection;
